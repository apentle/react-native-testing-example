'use strict';

const babel = require('babel-core');
const jest = require('babel-preset-jest');
const es2015 = require('babel-preset-es2015');
const react = require('babel-preset-react');

module.exports = {
  process(src, file) {
    if (babel.util.canCompile(file)) {
      return babel.transform(src, {
        auxiliaryCommentBefore: ' istanbul ignore next ',
        filename: file,
        presets: [
          jest,
          es2015,
          react,
        ],
        retainLines: true,
      }).code;
    }
    return src;
  },
};
