# dh-classlist

Helpers functions to manipulate the DOM element css classes.

## Installing

`npm install @borracciablu/dh-classlist`

## API Reference

### execClass(itmList, opList) 

```
 var docList = document.querySelectorAll('.doc');
 execClass(docList, [{'add': 'd-block'}, {remove: 'd-none'}])
```

### addClass(itmList, clsList)
```
var itm = document.querySelectorAll('.btn');
var cls = ['d-none']
addClass(itm, cls);
 ```

### removeClass(itmList, clsList)
```
var itm = document.querySelectorAll('.btn');
var cls = ['d-none']
removeClass(itm, cls);
 ```

### toggleClass(itmList, clsList)
```
var itm = document.querySelectorAll('.btn');
var cls = ['d-none']
toggleClass(itm, cls);
```