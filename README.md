# dh-classlist
[![npm version](https://badge.fury.io/js/%40borracciablu%2Fdh-classlist.svg)](https://badge.fury.io/js/%40borracciablu%2Fdh-classlist)
[![Coverage Status](https://coveralls.io/repos/github/borracciaBlu/dh-classlist/badge.svg?branch=master)](https://coveralls.io/github/borracciaBlu/dh-classlist?branch=master)
[![Build Status](https://github.com/borracciaBlu/dh-classlist/workflows/build-test/badge.svg)](https://github.com/borracciaBlu/dh-classlist/actions?query=workflow%3Abuild-test)
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![dependencies Status](https://david-dm.org/borracciaBlu/dh-classlist/status.svg)](https://david-dm.org/borracciaBlu/dh-classlist)
[![devDependencies Status](https://david-dm.org/borracciaBlu/dh-classlist/dev-status.svg)](https://david-dm.org/borracciaBlu/dh-classlist?type=dev)  

Helpers functions to manipulate the DOM element css classes.

[![Sauce Test Status](https://saucelabs.com/browser-matrix/borracciaBlu.svg)](https://saucelabs.com/u/borracciaBlu)
## Installing

`npm install @borracciablu/dh-classlist`

```js
import {execClass} from '@borracciablu/dh-classlist';
var {addClass, removeClass, toggleClass, execClass} = require('@borracciablu/dh-classlist');
```

## API Reference

### execClass(itmList, opList) 

```js
var docList = document.querySelectorAll('.doc');
execClass(docList, [{'add': 'd-block'}, {remove: 'd-none'}]);
```

### addClass(itmList, clsList)
```js
var itm = document.querySelectorAll('.btn');
var cls = ['d-none'];
addClass(itm, cls);
 ```

### removeClass(itmList, clsList)
```js
var itm = document.querySelectorAll('.btn');
var cls = ['d-none'];
removeClass(itm, cls);
 ```

### toggleClass(itmList, clsList)
```js
var itm = document.querySelectorAll('.btn');
var cls = ['d-none'];
toggleClass(itm, cls);
```

### execClassThunk(itmList, opList) 

```js
var docList = document.querySelectorAll('.doc');
var thunk = execClassThunk(docList, [{'add': 'd-block'}, {remove: 'd-none'}]);
setTimeout(thunk, 3000);
```

### addClassThunk(itmList, clsList)
```js
var itm = document.querySelectorAll('.btn');
var cls = ['d-none'];
var thunk = addClassThunk(itm, cls);
setTimeout(thunk, 3000);
 ```

### removeClassThunk(itmList, clsList)
```js
var itm = document.querySelectorAll('.btn');
var cls = ['d-none'];
var thunk = removeClassThunk(itm, cls);
setTimeout(thunk, 3000);
 ```

### toggleClassThunk(itmList, clsList)
```js
var itm = document.querySelectorAll('.btn');
var cls = ['d-none'];
var thunk = toggleClass(itm, cls);
setTimeout(thunk, 3000);
```

## CDN
Recommended CDN:

https://unpkg.com/@borracciablu/dh-classlist@latest/dist/dh-classlist.min.js

```js
var {addClass} = window.dhClasslist;

// Alternative syntax
var addClass = window.dhClasslist.addClass;
```