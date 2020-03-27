# dh-classlist
[![Build Status](https://travis-ci.org/borracciaBlu/dh-classlist.svg?branch=master)](https://travis-ci.org/borracciaBlu/dh-classlist)
[![dependencies Status](https://david-dm.org/borracciaBlu/dh-classlist/status.svg)](https://david-dm.org/borracciaBlu/dh-classlist)
[![npm version](https://badge.fury.io/js/typy.svg)](https://www.npmjs.com/package/@borracciablu/dh-classlist)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Helpers functions to manipulate the DOM element css classes.

## Installing

`npm install @borracciablu/dh-classlist`

```
import {execClass} from '@borracciablu/dh-classlist';
var {addClass, removeClass, toggleClass, execClass} = require('@borracciablu/dh-classlist');
```

## API Reference

### execClass(itmList, opList) 

```
 var docList = document.querySelectorAll('.doc');
 execClass(docList, [{'add': 'd-block'}, {remove: 'd-none'}]);
```

### addClass(itmList, clsList)
```
var itm = document.querySelectorAll('.btn');
var cls = ['d-none'];
addClass(itm, cls);
 ```

### removeClass(itmList, clsList)
```
var itm = document.querySelectorAll('.btn');
var cls = ['d-none'];
removeClass(itm, cls);
 ```

### toggleClass(itmList, clsList)
```
var itm = document.querySelectorAll('.btn');
var cls = ['d-none'];
toggleClass(itm, cls);
```