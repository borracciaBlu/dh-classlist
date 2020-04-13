'use strict';

var test = require('tape');
var {addClass, removeClass, toggleClass, execClass} = require('./');

var testNode = typeof document !== 'undefined' && document.body;

if (! testNode) {
    class NodeList {}
    global.NodeList = NodeList;

    var testNode = (function() {
        function containsFn(value) {
            return (o.classes.indexOf(value) > -1);
        }

        function addFn(value) {
            ! containsFn(value) &&o.classes.push(value);
        }

        function removeFn(value) {
            containsFn(value) && o.classes.splice(o.classes.indexOf(value), 1);
        }

        function toggleFn(value) {
            containsFn(value) && removeFn(value) || addFn(value);
        }

        var o = {};
        o.classes = [];
        o.classList = {
            add: addFn,
            remove: removeFn,
            toggle: toggleFn,
            contains: containsFn
        };

        return o;
    })();
}

test('add class', function (t) {
    t.equal(testNode.classList.contains('css-class-1'), false);
    addClass(testNode, 'css-class-1');
    t.equal(testNode.classList.contains('css-class-1'), true);

    t.equal(testNode.classList.contains('css-class-2'), false);
    addClass([testNode], 'css-class-2');
    t.equal(testNode.classList.contains('css-class-2'), true);


    t.equal(testNode.classList.contains('css-class-3'), false);
    addClass(testNode, ['css-class-3']);
    t.equal(testNode.classList.contains('css-class-3'), true);


    t.equal(testNode.classList.contains('css-class-4'), false);
    addClass([testNode], ['css-class-4']);
    t.equal(testNode.classList.contains('css-class-4'), true);

    addClass([testNode], ['css-class-5']);

    t.end();
});

test('remove class', function (t) {

    t.equal(testNode.classList.contains('css-class-1'), true);
    removeClass(testNode, 'css-class-1');
    t.equal(testNode.classList.contains('css-class-1'), false);

    t.equal(testNode.classList.contains('css-class-2'), true);
    removeClass([testNode], 'css-class-2');
    t.equal(testNode.classList.contains('css-class-2'), false);

    t.equal(testNode.classList.contains('css-class-3'), true);
    removeClass(testNode, ['css-class-3']);
    t.equal(testNode.classList.contains('css-class-3'), false);

    t.equal(testNode.classList.contains('css-class-4'), true);
    removeClass([testNode], ['css-class-4']);
    t.equal(testNode.classList.contains('css-class-4'), false);

    t.end();
});

test('toggle class', function (t) {
    toggleClass([testNode], ['css-class', 'css-class-1', 'css-class-5']);
    t.equal(testNode.classList.contains('css-class'), true);
    t.equal(testNode.classList.contains('css-class-1'), true);
    t.end();
});

test('exec class', function (t) {
    execClass(testNode, [{ add: 'css-class-3'}, { toggle: 'css-class-2'}, { remove: 'css-class-1'}]);
    t.equal(testNode.classList.contains('css-class-3'), true);
    t.equal(testNode.classList.contains('css-class-2'), true);
    t.equal(testNode.classList.contains('css-class-1'), false);
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

