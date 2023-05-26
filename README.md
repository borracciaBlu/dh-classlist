<p align="center">
  <a href="https://github.com/borracciaBlu/dh-classlist/" target="_blank">
    <img src="https://user-images.githubusercontent.com/2061731/238107833-da91bee3-822e-4ca4-9fd3-8b52b4454192.svg" width="129px" height="55px" alt="dh-classlist" />
  </a>

  <br>
  <span align="center">
	Helpers functions to manipulate the DOM element css classes.
  </span>
</p>

<p dir="auto"  align="center">
    <a href="https://badge.fury.io/js/%40borracciablu%2Fdh-classlist"><img src="https://badge.fury.io/js/%40borracciablu%2Fdh-classlist.svg" alt="npm version"></a>
    <a href="https://coveralls.io/github/borracciaBlu/dh-classlist?branch=master"><img src="https://coveralls.io/repos/github/borracciaBlu/dh-classlist/badge.svg?branch=master" alt="Coverage Status"></a>
    <a href="https://github.com/borracciaBlu/dh-classlist/actions?query=workflow%3Abuild-test"><img src="https://github.com/borracciaBlu/dh-classlist/workflows/build-test/badge.svg" alt="Build Status"></a>
    <a href="https://github.com/borracciaBlu/dh-classlist/blob/master/LICENSE"><img src="https://img.shields.io/badge/License-BSD%203--Clause-blue.svg" alt="License"></a>
</p>

<p dir="auto"  align="center">
	<a href="https://saucelabs.com/u/borracciaBlu"><img src="https://saucelabs.com/browser-matrix/borracciaBlu.svg" alt="Sauce Test Status"></a>
</p>

## Installing

`npm install @borracciablu/dh-classlist`

```js
import {addClass} from '@borracciablu/dh-classlist';
var {addClass, removeClass, toggleClass} = require('@borracciablu/dh-classlist');
```

## API Reference

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

## Deprecated API Reference

### execClass(itmList, opList) 

```js
var docList = document.querySelectorAll('.doc');
execClass(docList, [{'add': 'd-block'}, {remove: 'd-none'}]);

// replace with
( addClass(docList, 'd-block')
, removeClass(docList, 'd-none'));

```

### execClassThunk(itmList, opList) 

```js
var docList = document.querySelectorAll('.doc');
var thunk = execClassThunk(docList, [{'add': 'd-block'}, {remove: 'd-none'}]);
setTimeout(thunk, 3000);

// replace with
var thunk =  () => ( addClass(docList, 'd-block')
                   , removeClass(docList, 'd-none'));

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
