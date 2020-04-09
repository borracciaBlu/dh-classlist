'use strict';

var test = require('tape');
var {addClass, removeClass, toggleClass, execClass} = require('./');

test('add class', function (t) {
    t.equal(document.body.classList.contains('css-class-1'), false);
    addClass(document.body, 'css-class-1');
    t.equal(document.body.classList.contains('css-class-1'), true);

    t.equal(document.body.classList.contains('css-class-2'), false);
    addClass([document.body], 'css-class-2');
    t.equal(document.body.classList.contains('css-class-2'), true);


    t.equal(document.body.classList.contains('css-class-3'), false);
    addClass(document.body, ['css-class-3']);
    t.equal(document.body.classList.contains('css-class-3'), true);


    t.equal(document.body.classList.contains('css-class-4'), false);
    addClass([document.body], ['css-class-4']);
    t.equal(document.body.classList.contains('css-class-4'), true);

    t.end();
});

test('remove class', function (t) {
    t.equal(document.body.classList.contains('css-class-1'), true);
    removeClass(document.body, 'css-class-1');
    t.equal(document.body.classList.contains('css-class-1'), false);

    t.equal(document.body.classList.contains('css-class-2'), true);
    removeClass([document.body], 'css-class-2');
    t.equal(document.body.classList.contains('css-class-2'), false);

    t.equal(document.body.classList.contains('css-class-3'), true);
    removeClass(document.body, ['css-class-3']);
    t.equal(document.body.classList.contains('css-class-3'), false);

    t.equal(document.body.classList.contains('css-class-4'), true);
    removeClass([document.body], ['css-class-4']);
    t.equal(document.body.classList.contains('css-class-4'), false);

    t.end();
});

test('toggle class', function (t) {
    toggleClass([document.body], ['css-class', 'css-class-1']);
    t.equal(document.body.classList.contains('css-class'), true);
    t.equal(document.body.classList.contains('css-class-1'), true);
    t.end();
});

test('exec class', function (t) {
    execClass(document.body, [{ add: 'css-class-3'}, { toggle: 'css-class-2'}, { remove: 'css-class-1'}]);
    t.equal(document.body.classList.contains('css-class-3'), true);
    t.equal(document.body.classList.contains('css-class-2'), true);
    t.equal(document.body.classList.contains('css-class-1'), false);
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
