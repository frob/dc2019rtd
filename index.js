'use strict'

const pug = require('pug');
const fs = require('fs');
const yaml = require('js-yaml');

const outline = yaml.safeLoad(fs.readFileSync('./outline.yml', 'utf8'));

const content = outline.map(loadContent);

const compiledFunction = pug.compileFile('index.pug');

fs.writeFile('index.html', compiledFunction({'outline': content}), function(err) {
  if (err) {
    return console.log(err);
  }

  console.log('File Saved.')
});

function loadContent(file) {
  // Eventually this will need to maybe parse the markdown. Maybe not.
  return fs.readFileSync('./content/' + file, 'utf8');
}
