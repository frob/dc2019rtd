'use strict'

const pug = require('pug');
const fs = require('fs');
const yaml = require('js-yaml');
const md = require('markdown-it')()
  .use(require('markdown-it-deflist'))
  .use(require('markdown-it-container'), 'notes', {
    render: function (tokens, index) {
      if (tokens[index].nesting === 1) {
        return '<aside class="notes">';
      } else {
        return '</aside>';
      }
    },
    marker: ">"
  })
  .use(require('markdown-it-container'), 'slide', {
    render: function (tokens, index) {
      if (tokens[index].nesting === 1) {
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
    render: function (tokens, index) {
      if (tokens[index].nesting === 1) {
        const attributes = tokens[index].info.trim().match(/^section\s+(.*)$/);

        return '<section ' + attributes[1] + '>';
      } else {
        return '</section>';
      }
    }
  });
const fm = require('front-matter');
const dpm = console.log;
const slideTemplate = `
::: slide

>>> notes
- @TODO put notes here .

>>>

# Slide title

:::
`;

var outline = yaml.safeLoad(fs.readFileSync('./outline.yml', 'utf8'));

const content = outline.slides.map(loadContent);
outline.slides = content;

const compiledFunction = pug.compileFile('index.pug');
// console.log(outline);
fs.writeFile('index.html', compiledFunction({'outline': outline}), function(err) {
    if (err) {
      return console.log(err);
    }

    console.log('File Saved.')
});

function loadContent(file) {
  try {
    const frontMater = fm(fs.readFileSync('./content/' + file.file, 'utf8'));
    const classes = defineDefault('', frontMater.attributes.class);
    const transition = defineDefault('slide', frontMater.attributes.transition);
    const parser = defineDefault('markdown', frontMater.attributes.parser);
    let content = '';
    if (parser == 'pug') {
      try {
        content = pug.render(frontMater.body);
      }
      catch (e) {
        console.log(file.file);
        console.log(e);
      }
    } else {
      content = md.render(frontMater.body);
    }
    const contentObject = {
      body: content,
      notes: frontMater.attributes.notes,
      classes: classes,
      transition: transition
    }
    return contentObject;
  }
  catch (e) {
    if (typeof file.file !== 'undefined' && e.code === 'ENOENT') {
      fs.writeFileSync(e.path, slideTemplate, {'encoding': 'utf8'});
      console.log(e.path);
    }
    return false;
  }
}

function defineDefault(defaultValue, value) {
  return (typeof value === 'undefined') ? defaultValue : value;
}
