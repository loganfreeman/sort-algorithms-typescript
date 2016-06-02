"use strict";
var index_1 = require('../src/index');
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();
function generateRandomArray(length) {
    var a = new Array(length);
    var i = length;
    while (i > 0) {
        var n = Math.floor(Math.random() * length);
        a.push(n);
        i--;
    }
    return a;
}
var arr = generateRandomArray(100);
suite.add('bubble', function () {
    index_1.bubble(arr.slice());
})
    .add('insertion', function () {
    index_1.insertion(arr.slice());
})
    .on('complete', function () {
    console.log('completed');
})
    .run({ 'async': true });
