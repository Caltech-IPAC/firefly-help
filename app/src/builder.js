/* eslint-env node */

import {uniq, cloneDeep} from 'lodash';
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

    const _toc = cloneDeep(toc);
    stripPath(_toc);
    const tocSection = '<ul> <b>Table of Contents</b>' +
                            _toc.map((n) => toHtml(n)).join('\n') +
                       '</ul>';

    const tocHtml =   fs.readFileSync('./public/index.html', {encoding:'utf8', flag:'r'})
                        .replace('<div id="app-root" class="flex flex-grow overflow-hidden"/>', tocSection)
                        .replace('%REACT_APP_page_title%', process.env.REACT_APP_page_title);

    // generate table of contents
    // produce a _toc.html file based on the given toc(table of content) array
    // this file will be used by PDF generator to mimic the look of
    // the dynamically generated navigation tree panel
    const tocFname =  outDir + '/_toc.html';
    fs.writeFile(tocFname, tocHtml, function (err) {
        if (err) {
            return console.log(err);
        }
        // console.log(tocHtml);
    });

    const files = getHrefs(toc)
                  .map(s => s.split('#')[0])
                  .map(s => s.replaceAll(`"|'`, ''));

    const pdfInput = 'blank.gif _toc.html ' + uniq(files).join(' ');
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
    if (hidden) return '';

    const children = items ? '<ul>' + items.map((n) => toHtml(n)).join('\n') + '</ul>' : '';
    return `
        <li id="${id}" title="${title}">
            <a href="${href}">${title}</a>
            ${children} 
        </li>`;
}


function stripPath(nodes) {
    nodes.forEach(node => {
        if (node.href) {
            node.href = node.href.replace(/^.*\//, '');
        }
        if (node.items) {
            stripPath(node.items);
        }
    });
}

function getHrefs(nodes) {
    return nodes.flatMap(node => {
        const hrefs = [];
        if (node.href) {
            hrefs.push(node.href);
        }
        if (node.items) {
            hrefs.push(...getHrefs(node.items));
        }
        return hrefs;
    });
}

