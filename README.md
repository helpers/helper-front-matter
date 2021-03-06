# helper-front-matter [![NPM version](https://badge.fury.io/js/helper-front-matter.svg)](http://badge.fury.io/js/helper-front-matter)

> Template helper for parsing front matter and passing the data to templates as context/

## Install with [npm](npmjs.org)

```bash
npm i helper-front-matter --save
```

## Usage

### Register the helper

First, let's register another cutomer helper for this example:

```js
var fs = require('fs');
var handlebars = require('handlebars');
var matter = require('helper-front-matter')(handlebars);

// this is our helper
handlebars.registerHelper('matter', matter(handlebars));

// these are extra helpers we'll use for examples
handlebars.registerHelper('markdown', require('helper-markdown'));
handlebars.registerHelper('read', function (fp) {
  return fs.readFileSync(fp, 'utf8');
});
```

### Create some templates

Given you have a file, `abc.hbs`, with the following contents:

```handlebars
---
title: ABC
foo: bar
---

## This is {{title}}

> this is a blockquote
```

### Use the helpers

Used with the `markdown` helper as a block helper:

```handlebars
{{#markdown}}
# Heading
{{{matter (read "fixtures/abc.hbs")}}}
{{/markdown}}
```

Renders to:

```html
<h1>Heading</h1>
<h2>This is ABC</h2>
<blockquote>
<p>this is a blockquote</p>
</blockquote>
```

Used with the `markdown` helper as an inline helper:

```handlebars
{{{markdown (matter (read "fixtures/abc.hbs"))}}}
```

Renders to:

```html
<h2>This is ABC</h2>
<blockquote>
<p>this is a blockquote</p>
</blockquote>
```


## Running tests
Install dev dependencies:

```bash
npm i -d && npm test
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/helpers/helper-front-matter/issues)

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2015 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on April 09, 2015._
