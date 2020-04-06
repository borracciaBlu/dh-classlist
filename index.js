function getArray(itmList) {
    return Array.isArray(itmList)
        ? itmList
        : new Array(itmList);
}

function getArrayLike(itmList) {
    return (itmList instanceof NodeList || Array.isArray(itmList))
        ? itmList
        : new Array(itmList);
}

function classListAction(action, itm, option) {
    itm &&
    itm.classList &&
    itm.classList[action] &&
    itm.classList[action](option);
}

/**
 * Use DSL array to act on class list
 *
 * @example
 * var docList = document.querySelectorAll('.doc');
 * execClass(docList, [{'add': 'd-block'}, {remove: 'd-none'}])
 *
 * @param NodeList | Node itmList
 * @param {}[] | {} optList - Possibles values {'add': 'clsName'}, {remove: 'd-none'}, {toggle: 'd-none'}
 */
function execClass(itmList, optList) {
    itmList = getArrayLike(itmList);
    optList = getArray(optList);

    for (var i = itmList.length - 1; i >= 0; i--) {
        for (var a = optList.length - 1; a >= 0; a--) {
            for (var action in optList[a]) {
                classListAction(action, itmList[i], optList[a][action]);
            }
        }
    }
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
    return function (itmList, optList) {
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

module.exports.addClass = addClass;
module.exports.removeClass = removeClass;
module.exports.toggleClass = toggleClass;
module.exports.execClass = execClass;
