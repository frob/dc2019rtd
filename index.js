'use strict'

const pug = require('pug');
const fs = require('fs');
const yaml = require('js-yaml');
const md = require('markdown-it')()
  .use(require('markdown-it-deflist'))
  .use(require('markdown-it-container'), 'notes', {
    render: function (tokens, idx) {
      if (tokens[idx].info.trim() === 'notes') {
        return '<aside class="notes">';
      } else {
        return '</aside>';
      }
    }
  })
  .use(require('markdown-it-container'), 'section', {
    render: function (tokens, idx) {
      if (tokens[idx].info.trim() === 'section') {
        return '<section>';
      } else {
        return '</section>';
      }
    }
  });
const fm = require('front-matter');
const dpm = console.log;

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
  const frontMater = fm(fs.readFileSync('./content/' + file, 'utf8'));

  const contentObject = {
    body: md.render(frontMater.body),
    notes: frontMater.attributes.notes
  }

  return contentObject;
}
