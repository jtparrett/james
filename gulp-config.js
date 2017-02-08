var srcRoot = 'src/';
var devRoot = 'build/';
var prodRoot = 'dist/';

module.exports = {
  src: {
    root: srcRoot,
    sass: srcRoot + 'stylesheets/',
    js: srcRoot + 'javascripts/',
    img: srcRoot + 'images/',
    fonts: srcRoot + 'fonts/'
  },
  dev: {
    root: devRoot,
    sass: devRoot + 'stylesheets/',
    js: devRoot + 'javascripts/',
    img: devRoot + 'images/',
    fonts: devRoot + 'fonts/'
  },
  production: {
    root: prodRoot,
    sass: prodRoot + 'stylesheets/',
    js: prodRoot + 'javascripts/',
    img: prodRoot + 'images/',
    fonts: prodRoot + 'fonts/'
  }
};