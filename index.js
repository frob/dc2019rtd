'use strict'

const pug = require('pug');
const fs = require('fs');
const yaml = require('js-yaml');
const md = require('markdown-it')()
  .use(require('markdown-it-deflist'))
  .use(require('markdown-it-container'), 'notes', {
    render: function (tokens, idx) {
      if (tokens[idx].nesting === 1) {
        return '<aside class="notes">';
      } else {
        return '</aside>';
      }
    },
    marker: ">"
  })
  .use(require('markdown-it-container'), 'slide', {
    render: function (tokens, idx) {
      if (tokens[idx].nesting === 1) {
        return '<section data-transition="slide">';
      } else {
        return '</section>';
      }
    }
  })
  .use(require('markdown-it-container'), 'section', {
    validate: function (params) {
      return params.trim().match(/^section\s+(.*)$/);
    },
    render: function (tokens, idx) {
      if (tokens[idx].nesting === 1) {
        const attributes = tokens[idx].info.trim().match(/^section\s+(.*)$/);

        return '<section ' + attributes[1] + '>';
      } else {
        return '</section>';
      }
    }
  });
const fm = require('front-matter');
const dpm = console.log;

var outline = yaml.safeLoad(fs.readFileSync('./outline.yml', 'utf8'));

const content = outline.slides.map(loadContent);
outline.slides = content;

const compiledFunction = pug.compileFile('index.pug');

fs.writeFile('index.html', compiledFunction({'outline': outline}), function(err) {
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
