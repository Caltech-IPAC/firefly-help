/* eslint-env node */

import {get, uniq} from 'lodash';
import {create} from './toc/toc_creator';

const appName = process.argv[2] || './build';
const buildDir = process.argv[3] || './build';
const {toc} = create(appName);
build(buildDir, toc);


/**
 * additional javascript build logic
 * - dynamically generate a _toc.html page so PDF generator can use to create a Table of Content
 * - dynamically create .pdf-input file containing only the referenced HTML files used in the given toc
 * @param config
 * @param toc
 */
function build(outDir, toc) {
    const fs = require('fs');

    if (!fs.existsSync(outDir)){
        fs.mkdirSync(outDir, {recursive: true} );
    }

    // generate table of contents
    // produce a _toc.html file based on the given toc(table of content) array
    // this file will be used by PDF generator to mimic the look of
    // the dynamically generated navigation tree panel
    const tocHtml = htmlStart + toc.map((n) => toHtml(n)).join('\n') + htmlEnd;
    const tocFname =  outDir + '/_toc.html';
    fs.writeFile(tocFname, tocHtml, function (err) {
        if (err) {
            return console.log(err);
        }
        // console.log(tocHtml);
    });


    // generate .pdf-input file based on the given toc
    const files = tocHtml.split('\n')
        .filter(( (l) => l.toUpperCase().includes('HREF')))
        .map( (l) => get(l.match(/href[ ]*=[ ]*"([^"]+)"/i), [1], l))      // return all href with double quotes
        .map( (l) => get(l.match(/href[ ]*=[ ]*'([^']+)'/i), [1], l))              // return all href with single quotes
        .map( (l) => l.split('#')[0]);          // return the portion before the hash... this should be the file path

    const pdfInput = 'firefly/blank.gif _toc.html ' + uniq(files).join(' ');
    const pdfFname =  outDir + '/.pdf-input';
    fs.writeFile(pdfFname, pdfInput, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(pdfInput);
    });


}

function toHtml(node) {
    const {id, title, href, hidden=false, items} = node || {};

    const style = hidden ? 'display:none' : '';
    const children = items ? '<ul>' + items.map((n) => toHtml(n)).join('\n') + '</ul>' : '';
    return `
        <li id="${id}" title="${title}" style="${style}">
            <a href="${href}">${title}</a>
            ${children} 
        </li>`;
}



const htmlStart = `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!--NewPage-->
<HTML>
<!-- FOOTER LEFT "Table of Contents" -->
<HEAD>
</HEAD>
<BODY BGCOLOR="white" >
<div id="toc">

    <ul> <b>Table of Contents</b>
`;


const htmlEnd = `

<!--end of page    -->
    </ul>
</div>
</BODY>
</HTML>
`;
