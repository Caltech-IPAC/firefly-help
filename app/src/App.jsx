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
import pdfIco from './images/pdf.png';


export function App({tableOfContent, showHidden=false}) {

    const idFromUrl = () => window.location.hash.substr(1).replace('id=','');

    const [helpId, setHelpId] = useState(idFromUrl());     // using a useState hook
    const [expandedKeys=[], setExpandedKeys] = useState();

    useEffect(() => {
        window.onpopstate = (ev) => {
            setHelpId(idFromUrl());
        }
    });

    const treeRoot = convertToTreeNode('0', tableOfContent, showHidden);
    const treeMap = flattenTree({items: tableOfContent});
    const [selNode, href] = getSelNode(helpId, treeMap);
    const selectedKeys = [selNode.key];
    const pkey = selNode?.parent?.key;
    const defaultExpandedKeys = pkey ? [pkey] : undefined;
    const title = process.env.REACT_APP_Title;

    if (pkey && expandedKeys.findIndex((s) => s === pkey) < 0 ) {
        setExpandedKeys([...expandedKeys, pkey]);
    }

    return (
        <div className = 'App'>
            {title &&
                <div className='App-header'>
                    <div style={{fontSize: 'x-large'}}>
                        {title}
                    </div>
                </div>
            }

            <div className='App-main'>

                <Navigator {...{selNode, treeRoot, selectedKeys, defaultExpandedKeys, treeMap, tableOfContent, showHidden, expandedKeys, setExpandedKeys, setHelpId}}/>

                <div className='TOC-view'>
                    <iframe title='HelpFrame' className='HelpFrame' src={href}/>
                </div>
            </div>
            <VersionInfo/>
        </div>
    );
}

function Navigator({selNode, treeMap, treeRoot, selectedKeys, defaultExpandedKeys, expandedKeys=[], setExpandedKeys, setHelpId}) {

    const [open, setOpen] = useState(true);

    const gotoId = (helpId) => {
        window.location.hash = helpId;
    };

    const onSelect = (p, e) => {
        const helpId = get(e, 'node.props.value.id');
        gotoId(helpId);
    };

    const next = () => {
        gotoId(getNextNode(selNode.id, treeMap).id);
    };

    const previous = () => {
        gotoId(getPrevNode(selNode.id, treeMap).id);
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
                        <div className='button' onClick={previous} style={{marginLeft: 10}}><img alt='' title='Previous' src={previousIco}/></div>
                        <div className='button' onClick={next}><img alt='' title='Next' src={nextIco}/></div>
                        <div className='button' onClick={() => false} style={{margin: '0 10px'}}><a href='help.pdf' target='help_pdf'><img alt='' title='View PDF' src={pdfIco}/></a></div>
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
                    <div className='button' onClick={() => false} style={{marginTop: 10, border: 'none'}}><a href='help.pdf' target='help_pdf'><img alt='' title='View PDF' src={pdfIco}/></a></div>
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

function flattenTree(node={}, map={}) {

    if (node.id) map[node.id] = node;

    const items = node.items || [];
    items.length > 0 && items.forEach( (n) => {
        const mnode = {...n, parent: node};
        flattenTree(mnode, map);
    });
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

function getSelNode(helpId, treeMap) {
    const root = Object.values(treeMap)[0];
    let snode = treeMap[helpId];
    let href = snode?.href || root.href;
    if (snode?.hidden) {
        snode = Object.values(treeMap).find((n) => !n.hidden && n.href === snode.href)
        snode = snode || getPrevNode(helpId, treeMap);
    }
    return [snode || root, href];
}

function getPrevNode(helpId, treeMap) {
    let snode;
    const allNodes = Object.values(treeMap);
    const idx = allNodes.findIndex((n) => n.id === helpId);
    if (idx > 0) {
        snode = allNodes.slice(0, idx).reverse().find((n) => !n.hidden);
    }
    return snode || allNodes[0];
}

function getNextNode(helpId, treeMap) {
    let snode;
    const allNodes = Object.values(treeMap);
    const idx = allNodes.findIndex((n) => n.id === helpId);
    if (idx >= 0 && idx < allNodes.length -2 ) {
        snode = allNodes.slice(idx+1).find((n) => !n.hidden);
    }
    return snode || allNodes[0];
}