describe('dh-classlist', function tests() {
    'use strict';

    var {
        addClass,
        removeClass,
        toggleClass,
        execClass,
        addClassThunk,
        removeClassThunk,
        toggleClassThunk,
        execClassThunk
    } = require('../');
    var assert = require('assert');

    var testNode = typeof document !== 'undefined' && document.body;

    if (! testNode) {
        class NodeList {}
        global.NodeList = NodeList;

        var testNode = (function() {

            var o = {};
            o.classes = [];
            o.classList = {};

            o.classList.add = function (value) {
                ! o.classList.contains(value) && o.classes.push(value);
            };

            o.classList.remove = function (value) {
                o.classList.contains(value) && o.classes.splice(o.classes.indexOf(value), 1);
            };

            o.classList.toggle = function (value) {
                o.classList.contains(value) && o.classList.remove(value) || o.classList.add(value);
            };

            o.classList.contains = function (value) {
                return (o.classes.indexOf(value) > -1);
            };

            return o;
        })();
    }

    describe('addClass', function() {
        it('should add class', function () {
            assert.equal(testNode.classList.contains('css-class-1'), false);
            addClass(testNode, 'css-class-1');
            assert.equal(testNode.classList.contains('css-class-1'), true);

            assert.equal(testNode.classList.contains('css-class-2'), false);
            addClass([testNode], 'css-class-2');
            assert.equal(testNode.classList.contains('css-class-2'), true);


            assert.equal(testNode.classList.contains('css-class-3'), false);
            addClass(testNode, ['css-class-3']);
            assert.equal(testNode.classList.contains('css-class-3'), true);


            assert.equal(testNode.classList.contains('css-class-4'), false);
            addClass([testNode], ['css-class-4']);
            assert.equal(testNode.classList.contains('css-class-4'), true);

            addClass([testNode], ['css-class-5']);
        });

        it('should return a add class thunk', function () {
            var addThunk1 = addClassThunk(testNode, 'css-class-1-thunk');
            assert.equal(testNode.classList.contains('css-class-1-thunk'), false);
            addThunk1();
            assert.equal(testNode.classList.contains('css-class-1-thunk'), true);

            var addThunk2 = addClassThunk([testNode], 'css-class-2-thunk');
            assert.equal(testNode.classList.contains('css-class-2-thunk'), false);
            addThunk2();
            assert.equal(testNode.classList.contains('css-class-2-thunk'), true);


            var addThunk3 = addClassThunk(testNode, ['css-class-3-thunk']);
            assert.equal(testNode.classList.contains('css-class-3-thunk'), false);
            addThunk3();
            assert.equal(testNode.classList.contains('css-class-3-thunk'), true);


            var addThunk4 = addClassThunk([testNode], ['css-class-4-thunk']);
            assert.equal(testNode.classList.contains('css-class-4-thunk'), false);
            addThunk4();
            assert.equal(testNode.classList.contains('css-class-4-thunk'), true);

            addClassThunk([testNode], ['css-class-5-thunk'])();
        });
    });

    describe('removeClass', function() {
        it('should remove class', function () {
            assert.equal(testNode.classList.contains('css-class-1'), true);
            removeClass(testNode, 'css-class-1');
            assert.equal(testNode.classList.contains('css-class-1'), false);

            assert.equal(testNode.classList.contains('css-class-2'), true);
            removeClass([testNode], 'css-class-2');
            assert.equal(testNode.classList.contains('css-class-2'), false);

            assert.equal(testNode.classList.contains('css-class-3'), true);
            removeClass(testNode, ['css-class-3']);
            assert.equal(testNode.classList.contains('css-class-3'), false);

            assert.equal(testNode.classList.contains('css-class-4'), true);
            removeClass([testNode], ['css-class-4']);
            assert.equal(testNode.classList.contains('css-class-4'), false);
        });

        it('should return a add class thunk', function () {
            var removeThunk1 = removeClassThunk(testNode, 'css-class-1-thunk');
            assert.equal(testNode.classList.contains('css-class-1-thunk'), true);
            removeThunk1();
            assert.equal(testNode.classList.contains('css-class-1-thunk'), false);

            var removeThunk2 = removeClassThunk([testNode], 'css-class-2-thunk');
            assert.equal(testNode.classList.contains('css-class-2-thunk'), true);
            removeThunk2();
            assert.equal(testNode.classList.contains('css-class-2-thunk'), false);

            var removeThunk3 = removeClassThunk(testNode, ['css-class-3-thunk']);
            assert.equal(testNode.classList.contains('css-class-3-thunk'), true);
            removeThunk3();
            assert.equal(testNode.classList.contains('css-class-3-thunk'), false);

            var removeThunk4 = removeClassThunk([testNode], ['css-class-4-thunk']);
            assert.equal(testNode.classList.contains('css-class-4-thunk'), true);
            removeThunk4();
            assert.equal(testNode.classList.contains('css-class-4-thunk'), false);
        });
    });

    describe('toggleClass', function() {
        it('should toggle class', function () {
            toggleClass([testNode], ['css-class', 'css-class-1', 'css-class-5']);
            assert.equal(testNode.classList.contains('css-class'), true);
            assert.equal(testNode.classList.contains('css-class-1'), true);
        });

        it('should toggle class thunk', function () {
            var thunk = toggleClassThunk([testNode], ['css-class-thunk', 'css-class-1-thunk', 'css-class-5-thunk']);
            assert.equal(testNode.classList.contains('css-class-thunk'), false);
            assert.equal(testNode.classList.contains('css-class-1-thunk'), false);

            thunk();
            assert.equal(testNode.classList.contains('css-class-thunk'), true);
            assert.equal(testNode.classList.contains('css-class-1-thunk'), true);
        });
    });

    describe('execClass', function() {
        it('should exec class', function () {
            execClass(testNode, [{ add: 'css-class-3'}, { toggle: 'css-class-2'}, { remove: 'css-class-1'}]);
            assert.equal(testNode.classList.contains('css-class-3'), true);
            assert.equal(testNode.classList.contains('css-class-2'), true);
            assert.equal(testNode.classList.contains('css-class-1'), false);
        });

        it('should exec class thunk', function () {
            var thunk = execClassThunk(testNode, [{ add: 'css-class-3-thunk'}, { toggle: 'css-class-2-thunk'}, { remove: 'css-class-1-thunk'}]);
            assert.equal(testNode.classList.contains('css-class-3-thunk'), false);
            assert.equal(testNode.classList.contains('css-class-2-thunk'), false);
            assert.equal(testNode.classList.contains('css-class-1-thunk'), true);

            thunk();
            assert.equal(testNode.classList.contains('css-class-3-thunk'), true);
            assert.equal(testNode.classList.contains('css-class-2-thunk'), true);
            assert.equal(testNode.classList.contains('css-class-1-thunk'), false);
        });
    });

    describe('when interact with intruder', function () {
        it('should be resilient', function () {
            toggleClass(null, 'css-class');
            toggleClass([null], 'css-class');
            toggleClass(undefined, 'css-class');
            toggleClass([undefined], 'css-class');
            toggleClass({}, 'css-class');
            toggleClass([{}], 'css-class');
        });
    });
});
