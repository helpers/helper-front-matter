/*!
 * helper-front-matter <https://github.com/jonschlinkert/helper-front-matter>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

/* deps:mocha */
var fs = require('fs');
var assert = require('assert');
var should = require('should');
var handlebars = require('handlebars');
var matter = require('./');

handlebars.registerHelper('markdown', require('helper-markdown'));
handlebars.registerHelper('matter', matter(handlebars));
handlebars.registerHelper('read', function (fp) {
  return fs.readFileSync(fp, 'utf8');
});

describe('matter', function () {
  it('should:', function () {
    var str = fs.readFileSync('fixtures/xyz.hbs', 'utf8');
    var res = handlebars.compile(str)({});
    res.should.match(/<h1>Heading<\/h1>/);
  });
});
