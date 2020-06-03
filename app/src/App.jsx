import React, {useEffect, useState} from 'react';
import {get, pickBy} from 'lodash';

import Tree, { TreeNode } from 'rc-tree';
import 'rc-tree/assets/index.css';

import './App.css';
import ReactDOM from 'react-dom';

import expandIco from './images/expand.png';
import collapseIco from './images/collapse.png';
import previousIco from './images/previous.png';
import nextIco from './images/next.png';
import openIco from './images/open.png';
import closeIco from './images/close.png';


export function App({tableOfContent, showHidden=false}) {

    const [helpId, setHelpId] = useState(window.location.hash.substr(1));     // using a useState hook
    const [expandedKeys=[], setExpandedKeys] = useState();

    const treeRoot = convertToTreeNode('0', tableOfContent, showHidden);
    const treeMap = flattenTree({items: tableOfContent});
    const selNode = treeMap[helpId] || get(tableOfContent, '0');
    const selectedKeys = [selNode.key];
    const pkey = selNode?.parent?.key;
    const defaultExpandedKeys = pkey ? [pkey] : undefined;

    if (pkey && expandedKeys.findIndex((s) => s === pkey) < 0 ) {
        setExpandedKeys([...expandedKeys, pkey]);
    }

    return (
        <div className = 'App'>
            <div className='App-header'>
                <div style={{fontSize: 'x-large'}}>
                    {document.title}
                </div>
                <div>
                    <a href='help.pdf' target='help_pdf'>View PDF</a>
                </div>
            </div>

            <div className='App-main'>

                <Navigator {...{selNode, treeRoot, selectedKeys, defaultExpandedKeys, treeMap, tableOfContent, showHidden, expandedKeys, setExpandedKeys, setHelpId}}/>

                <div className='TOC-view'>
                    <iframe title='HelpFrame' className='HelpFrame' src={selNode.href}/>
                </div>
            </div>
            <VersionInfo/>
        </div>
    );
}

function Navigator({selNode, treeMap, treeRoot, selectedKeys, defaultExpandedKeys, expandedKeys=[], setExpandedKeys, setHelpId}) {

    const [open, setOpen] = useState(true);

    const gotoId = (helpId) => {
        const helpItems = Object.values(treeMap);
        const item = helpItems.find((el) => el.id === helpId);
        if (item) {
            setHelpId(helpId);
            const url = window.location.href.replace(window.location.hash, '');
            window.history.pushState(undefined, window.title, `${url}#${helpId}`);
        }
    };

    const onSelect = (p, e) => {
        const helpId = get(e, 'node.props.value.id');
        gotoId(helpId);
    };

    const next = () => {
        const keys = Object.keys(treeMap);
        const cidx = keys.findIndex((k) => selNode.id === k);
        gotoId(keys[cidx+1]);
    };

    const previous = () => {
        const keys = Object.keys(treeMap);
        const cidx = keys.findIndex((k) => selNode.id === k);
        gotoId(keys[cidx-1]);
    };

    const expandAll = (flg) => {
        if (flg) {
            const allKeys =  Object.values(treeMap)
                .filter((n) => get(n, 'items.length')>0)
                .map((n) => n.key);
            setExpandedKeys(allKeys);
        } else {
            setExpandedKeys([]);
        }
    };

    const onExpand = (e) => {
        setExpandedKeys(e);
    };

    if (open) {
        return (
            <div className='TOC'>
                <div className='TOC-toolbar'>
                    <div style={{display: 'inline-flex'}}>
                        <div className='button' onClick={() => expandAll(true)}><img alt='' title='Expand All' src={expandIco}/></div>
                        <div className='button' onClick={() => expandAll(false)}><img alt='' title='Collapse All' src={collapseIco}/></div>
                        <div className='button' onClick={previous} style={{marginLeft: 20}}><img alt='' title='Previous' src={previousIco}/></div>
                        <div className='button' onClick={next}><img alt='' title='Next' src={nextIco}/></div>
                    </div>
                    <div className='button' onClick={() => setOpen(false)}><img alt='' title='Close Navigator' src={closeIco}/></div>
                </div>
                <Tree showLine {...pickBy({onSelect, expandedKeys, onExpand, selectedKeys, defaultExpandedKeys, autoExpandParent: true})} >
                    {treeRoot}
                </Tree>
            </div>
        );
    } else {
        return (
            <div className='TOC'>
                <div className={'navVertical'}>
                    <div className='button' onClick={() => setOpen(true)}><img alt='' title='Open' src={openIco}/></div>
                    <div className='button' onClick={previous}><img alt='' title='Previous' src={previousIco}/></div>
                    <div className='button' onClick={next}><img alt='' title='Next' src={nextIco}/></div>
                </div>
            </div>
        );
    }
}

function VersionInfo() {

    const vTag = process.env.REACT_APP_VersionTag || 'not set';
    const vCommit = process.env.REACT_APP_BuildCommit || 'not set';
    const buildTime = process.env.REACT_APP_BuildTime || 'not set';

    const hideVersionPopup = () => {
        const div = document.getElementById('VersionPopup');
        ReactDOM.unmountComponentAtNode(div);
    };
    const showVersionPopup = () => {
        const div = document.getElementById('VersionPopup');
        ReactDOM.render( <VersionPopup {...{vTag, vCommit, buildTime, hideVersionPopup}}/>, div);
    };

    return (
        <div className='versionInfo' onClick={showVersionPopup}>
            {`${vTag}`}
            <div id='VersionPopup'/>
        </div>
    );
}

function convertToTreeNode(key, node, showHidden) {

    if (Array.isArray(node)) {
        return node.map((n, idx) =>convertToTreeNode(`${key}-${idx}`, n, showHidden));
    }

    const show = !node.hidden || showHidden;
    const items = showHidden ? node.items : node.items && node.items.filter((node) => !node.hidden);
    let {title, hidden, style={}} = node;
    style = hidden ? {color: 'darkgray', ...style} : style;
    node.key = key;
    if (show) {
        if (get(items, 'length') > 0) {
            return (
                <TreeNode {...{key, style, title, value:node}}>
                    {items.map((node, idx) => convertToTreeNode(`${key}-${idx}`, node, showHidden))}
                </TreeNode>
            );
        } else {
            return <TreeNode {...{isLeaf:true, key, style, title, value:node}}/>;
        }
    }
};

function flattenTree(node={}, map={}, showHidden) {

    if (node.id) map[node.id] = node;

    const items = showHidden ? node.items : node.items && node.items.filter((node) => !node.hidden);
    if (get(items, 'length') > 0) {
        items.forEach( (n) => {
            const mnode = {...n, parent: node};
            flattenTree(mnode, map, showHidden);
        });
    }
    return map;
}


function VersionPopup ({vTag, vCommit, buildTime, hideVersionPopup}) {
    useEffect(() => {
        document.addEventListener('click', hideVersionPopup);
        return () => document.removeEventListener('click', hideVersionPopup);
    }, [hideVersionPopup]);

    return (
        <div style={{display: 'grid', marginTop: 10}}>
            <div className='verLine'><div>Commit Hash: </div><div className='verValue'>{vCommit}</div></div>
            <div className='verLine'><div>Build On: </div><div className='verValue'>{buildTime}</div></div>
        </div>
    );
}
