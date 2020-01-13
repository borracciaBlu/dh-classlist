/**
 * Use DSL array to act on class list
 *
 * @example
 * var docList = document.querySelectorAll('.doc');
 * execClass(docList, [{'add': 'd-block'}, {remove: 'd-none'}])
 *
 * @param NodeList | Node itmList
 * @param {}[] | {} opList - Possibles values {'add': 'clsName'}, {remove: 'd-none'}, {toggle: 'd-none'}
 */
export function execClass(itmList, opList) {
	itmList = (itmList.length instanceof NodeList || Array.isArray(itmList))
		? itmList
		: new Array(itmList);

	opList = (Array.isArray(opList))
		? opList
		: new Array(opList);

	for (var i = itmList.length - 1; i >= 0; i--) {
		for (var a = opList.length - 1; a >= 0; a--) {
			for (var key in opList[a]) {
				itmList[i] &&
				itmList[i].classList &&
				itmList[i].classList[key] &&
				itmList[i].classList[key](opList[a][key]);
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
 * @param String classListAction
 * @return Function
 */
function generateClassListFn(classListAction) {
	return function (itmList, opList) {
		itmList = (itmList instanceof NodeList || Array.isArray(itmList))
			? itmList
			: new Array(itmList);

		opList = (Array.isArray(opList))
			? opList
			: new Array(opList);

		for (var i = itmList.length - 1; i >= 0; i--) {
			for (var a = opList.length - 1; a >= 0; a--) {
				itmList[i] &&
				itmList[i].classList &&
				itmList[i].classList[classListAction](opList[a]);
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
export function addClass(itmList, clsList) {
	return generateClassListFn('add')(itmList, clsList);
}

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
export function removeClass(itmList, clsList) {
	return generateClassListFn('remove')(itmList, clsList);
}

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
export function toggleClass(itmList, clsList) {
	return generateClassListFn('toggle')(itmList, clsList);
}

