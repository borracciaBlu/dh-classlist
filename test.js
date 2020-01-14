'use strict';

var test = require('tape');
var {addClass, removeClass, toggleClass, execClass} = require('./');

test('when interact with element, check for class', function (t) {
    addClass(document.body, ['css-class']);
    t.equal(document.body.classList.contains('css-class'), true);

    removeClass(document.body, 'css-class');
    t.equal(document.body.classList.contains('css-class'), false);

    toggleClass([document.body], 'css-class');
    t.equal(document.body.classList.contains('css-class'), true);

    execClass(document.body, [{ add: 'css-class'}, { toggle: 'css-class-2'}]);
    t.equal(document.body.classList.contains('css-class'), true);
    t.equal(document.body.classList.contains('css-class-2'), true);

    t.end();
});

test('when interact with intruder', function (t) {
    toggleClass(null, 'css-class');
    toggleClass([null], 'css-class');
    toggleClass(undefined, 'css-class');
    toggleClass([undefined], 'css-class');
    toggleClass({}, 'css-class');
    toggleClass([{}], 'css-class');

    t.end();
});
