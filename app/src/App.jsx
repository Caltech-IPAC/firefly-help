import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {get, pickBy} from 'lodash';

import Tree, { TreeNode } from 'rc-tree';
import 'rc-tree/assets/index.css';


import Expand from '@mui/icons-material/UnfoldMore';
import Collaspe from '@mui/icons-material/UnfoldLess';
import Previous from '@mui/icons-material/NavigateBeforeRounded';
import Next from '@mui/icons-material/NavigateNextRounded';
import Close from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import Open from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import Pdf from '@mui/icons-material/PictureAsPdfOutlined';

export function App({tableOfContent, showHidden=false}) {

    const idFromUrl = () => window.location.hash.substr(1).replace('id=','');

    const [helpId, setHelpId] = useState(idFromUrl());     // using a useState hook
    const [expandedKeys=[], setExpandedKeys] = useState();
    const [mode, setMOde] = useState(false);

    useEffect(() => {
        window.onpopstate = (ev) => {
            setHelpId(idFromUrl());
        }
        const urlParams = new URLSearchParams(window.location.search);
        const mode = urlParams.get('mode');
        setMOde(mode || 'light');
    }, []);

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

    const modeClz = mode === 'dark' ? 'dark' : '';

    return (
        <div className = {`${modeClz} flex flex-col w-full dark:bg-black dark:text-white`}>
            {title &&
                <div className='inline-flex p-2 justify-center'>
                    <div className='text-3xl'>
                        {title}
                    </div>
                </div>
            }

            <div className='inline-flex flex-grow overflow-hidden'>
                <div className='flex flex-col'>
                    <Navigator {...{selNode, treeRoot, selectedKeys, defaultExpandedKeys, treeMap, tableOfContent, showHidden, expandedKeys, setExpandedKeys, setHelpId}}/>
                </div>

                <div className='flex-grow relative min-w-[100px]'>
                    <iframe id='help-content' title='HelpFrame' src={href} onLoad={() => styleIframe(mode, 'help-content')} className='w-full h-full mx-1 dark:bg-black dark:text-white'/>
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
            <NavBar className='min-w-60 w-[20vw]'>
                <div className='inline-flex mb-2 p-1 w-full justify-between shadow bg-slate-300 dark:bg-slate-700'>
                    <div className='inline-flex space-x-4'>
                        <div className='inline-flex'>
                            <Button onClick={() => expandAll(true)}><Expand title='Expand All'/></Button>
                            <Button onClick={() => expandAll(false)}><Collaspe title='Collapse All'/></Button>
                        </div>
                        <div className='inline-flex'>
                            <Button onClick={previous}><Previous title='Previous'/></Button>
                            <Button onClick={next}><Next title='Next'/></Button>
                        </div>
                        <Button onClick={() => false} className='mx-6'><a href='help.pdf' target='help_pdf'><Pdf title='View PDF'/></a></Button>
                    </div>
                    <Button onClick={() => setOpen(false)}><Close title='Close Navigator'/></Button>
                </div>
                <div className='relative grow'>
                    <div className='absolute inset-0 overflow-auto '>
                        <Tree showLine {...pickBy({onSelect, expandedKeys, onExpand, selectedKeys, defaultExpandedKeys, autoExpandParent: true})} >
                            {treeRoot}
                        </Tree>
                    </div>
                </div>
            </NavBar>
        );
    } else {
        return (
            <NavBar className='w-8'>
                <div className='flex flex-col space-y-4'>
                    <Button onClick={() => setOpen(true)}><Open title='Open Navigator'/></Button>
                    <div>
                        <Button onClick={previous}><Previous title='Previous'/></Button>
                        <Button onClick={next}><Next title='Next'/></Button>
                    </div>
                    <Button onClick={() => false}><a href='help.pdf' target='help_pdf'><Pdf title='View PDF'/></a></Button>
                </div>
            </NavBar>
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
        <div className='mx-3 italic text-gray-500' onClick={showVersionPopup}>
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
        <div className="grid mt-10">
            <div className='inline-flex space-x-4'><div>Commit Hash: </div><div className='font-bold'>{vCommit}</div></div>
            <div className='inline-flex space-x-4'><div>Build On: </div><div className='font-bold'>{buildTime}</div></div>
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

function Button({ onClick, className, children }) {
    return (
        <button onClick={onClick} className={` text-black font-bold dark:text-white hover:bg-gray-400 hover:shadow ${className} `}>
            {children}
        </button>
    );
}

function NavBar({children, className}) {
    return(
        <div className={`${className} flex flex-col flex-grow transition-all max-w-96 border border-gray-200 dark:border-gray-900 bg-gradient-to-bl from-slate-200 dark:from-slate-900`}>
            {children}
        </div>
    )
}

function styleIframe(mode, iframeId) {
    const iframe = document.getElementById(iframeId);
    const body = iframe?.contentWindow?.document?.body;

    if (!body) return;

    if (mode === 'dark') {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';

        const images = body.querySelectorAll('img');
        images.forEach(img => {
            img.style.filter = 'invert(1)';
        });

        const anchors = body.querySelectorAll('a');
        anchors.forEach(a => {
            a.style.color = '#6ab7ff';
        });
    }

}
