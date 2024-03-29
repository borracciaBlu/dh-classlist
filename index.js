'use strict';

function getListOrArray(fn) {
    return function(itmList) {
        return fn(itmList) ? itmList : new Array(itmList);
    };
}

function isArrayLike(itmList) {
    return itmList instanceof NodeList || Array.isArray(itmList);
}

var getArray = getListOrArray(Array.isArray);
var getArrayLike = getListOrArray(isArrayLike);

function classListAction(action, itm, option) {
    itm &&
    itm.classList &&
    itm.classList[action] &&
    itm.classList[action](option);
}

/**
 * Generate the function to manipulate classList
 *
 * @example
 * var itm = document.querySelectorAll('.btn');
 * var cls = ['d-none']
 * generateClassListFn('add')(itmList, clsList);
 *
 * @param String action
 * @return Function
 */
function generateClassListFn(action) {
    return function(itmList, optList) {
        itmList = getArrayLike(itmList);
        optList = getArray(optList);

        for (var i = itmList.length - 1; i >= 0; i--) {
            for (var a = optList.length - 1; a >= 0; a--) {
                classListAction(action, itmList[i], optList[a]);
            }
        }
    };
}

/**
 * Generate a thunk to manipulate classList
 *
 * @example
 * var itm = document.querySelectorAll('.btn');
 * var cls = ['d-none']
 * generateThunkClassListFn('add')(itmList, clsList)();
 *
 * @param String action
 * @return Function
 */
function generateThunkClassListFn(action) {
    return function(itmList, optList) {
        return function() {
            generateClassListFn(action)(itmList, optList);
        };
    };
}

/**
 * Add a css class to a Node
 *
 * @example
 * var itm = document.querySelectorAll('.btn');
 * var cls = ['d-none']
 * addClass(itm, cls);
 *
 * @param NodeList | Node itmList
 * @param String[] | String clsList
 */
var addClass = generateClassListFn('add');

/**
 * Remove a css class to a Node
 *
 * @example
 * var itm = document.querySelectorAll('.btn');
 * var cls = ['d-none']
 * removeClass(itm, cls);
 *
 * @param NodeList | Node itmList
 * @param String[] | String clsList
 */
var removeClass = generateClassListFn('remove');

/**
 * Toggle a css class to a Node
 *
 * @example
 * var itm = document.querySelectorAll('.btn');
 * var cls = ['d-none']
 * toggleClass(itm, cls);
 *
 * @param NodeList | Node itmList
 * @param String[] | String clsList
 */
var toggleClass = generateClassListFn('toggle');

/**
 * Thunk to add a css class to a Node
 *
 * @example
 * var itm = document.querySelectorAll('.btn');
 * var cls = ['d-none']
 * var thunk = addClassThunk(itm, cls);
 * setTimeout(thunk, 3000);
 *
 * @param NodeList | Node itmList
 * @param String[] | String clsList
 * @return Function
 */
var addClassThunk = generateThunkClassListFn('add');

/**
 * Thunk to remove a css class to a Node
 *
 * @example
 * var itm = document.querySelectorAll('.btn');
 * var cls = ['d-none']
 * var thunk = removeClassThunk(itm, cls);
 * setTimeout(thunk, 3000);
 *
 * @param NodeList | Node itmList
 * @param String[] | String clsList
 * @return Function
 */
var removeClassThunk = generateThunkClassListFn('remove');

/**
 * Thunk to toggle a css class to a Node
 *
 * @example
 * var itm = document.querySelectorAll('.btn');
 * var cls = ['d-none']
 * var thunk = addToggleThunk(itm, cls);
 * setTimeout(thunk, 3000);
 *
 * @param NodeList | Node itmList
 * @param String[] | String clsList
 * @return Function
 */
var toggleClassThunk = generateThunkClassListFn('toggle');

module.exports.addClass = addClass;
module.exports.removeClass = removeClass;
module.exports.toggleClass = toggleClass;

module.exports.addClassThunk = addClassThunk;
module.exports.removeClassThunk = removeClassThunk;
module.exports.toggleClassThunk = toggleClassThunk;
