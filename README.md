# dh-classlist
[![Build Status](https://travis-ci.org/borracciaBlu/dh-classlist.svg?branch=master)](https://travis-ci.org/borracciaBlu/dh-classlist)
[![dependencies Status](https://david-dm.org/borracciaBlu/dh-classlist/status.svg)](https://david-dm.org/borracciaBlu/dh-classlist)
[![devDependencies Status](https://david-dm.org/borracciaBlu/dh-classlist/dev-status.svg)](https://david-dm.org/borracciaBlu/dh-classlist?type=dev)
[![npm version](https://badge.fury.io/js/%40borracciablu%2Fdh-classlist.svg)](https://badge.fury.io/js/%40borracciablu%2Fdh-classlist)
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
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