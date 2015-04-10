/*!
 * helper-front-matter <https://github.com/jonschlinkert/helper-front-matter>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var matter = require('gray-matter');
var extend = require('extend-shallow');

module.exports = function (engine) {
  return function (str, options) {
    var opts = extend({}, this.options, options);
    var res = matter(str, opts);
    var result;

    if (this.app && this.app.render) {
      // use `render` from assemble, verb or Template
      return this.app.render(res.content, res.data);
    } else {
      // use the compile method from `engine`
      return engine.compile(res.content)(res.data);
    }
  };
};
