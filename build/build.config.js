'use strict';

//basic configuration object used by gulp tasks
module.exports = {
  port: 3000,
  html: 'app/**/*.html',
  tmpDist: 'build/dist/scripts',
  sassDist: 'build/tmp',
  dist: 'build/dist',
  base: 'app',
  tpl: ['!app/index.html',
  '!app/vendor/**/*.html',
  '!app/test/**/*.html',
  'app/**/*.html'],
  mainScss: 'app/app.scss',
  scss: 'app/**/*.scss',
  js: [
    '!app/vendor/**/*.js',
    '!app/test/unit-results/**/*.js',
    '!app/assets/d3.js',
    '!app/assets/d3.min.js',
    '!app/assets/r2d3.js',
    '!app/assets/r2d3.min.js',
    '!app/assets/html5shiv.min.js',
    'app/**/*.js',   //unit
  ],
  index: 'app/index.html',
  assets: 'app/assets/**',
  images: 'app/assets/images/**/*',
  font: 'app/assets/font/**/*',
  banner: ['/**',
    ' * generator-cg-gas - Yeoman Generator for Enterprise Angular projects, with Gulp Angular Sass',
    ' * @version v3.3.3',
    ' * @link https://github.com/Lunatic83/generator-cg-gas',
    ' * @license ',
    ' */',
    ''
  ].join('\n')
};
