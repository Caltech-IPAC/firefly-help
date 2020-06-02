/* eslint-env node */

var path = require('path');

var firefly_root = path.resolve(__dirname);
const builder = require(firefly_root + '/src/builder.js').default;

// change this to the correct env
var buildDir = process.argv[2] || firefly_root + '/build';
const toc = require(firefly_root + '/src/toc').toc;
builder(buildDir, toc);
