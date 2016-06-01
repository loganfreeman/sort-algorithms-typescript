"use strict";
var swap_1 = require('./swap');
function heapSort(array) {
    array = array.slice();
    for (var i = Math.floor(array.length / 2 - 1); i >= 0; i--) {
        shiftDown(array, i, array.length);
    }
    for (var i = array.length - 1; i >= 1; i--) {
        swap_1.default(array, 0, i);
        shiftDown(array, 0, i);
    }
    return array;
}
function shiftDown(array, i, j) {
    var done = false;
    var maxChild;
    while ((i * 2 + 1 < j) && !done) {
        if (i * 2 + 1 === j - 1) {
            maxChild = i * 2 + 1;
        }
        else if (array[i * 2 + 1] > array[i * 2 + 2]) {
            maxChild = i * 2 + 1;
        }
        else {
            maxChild = i * 2 + 2;
        }
        if (array[i] < array[maxChild]) {
            swap_1.default(array, i, maxChild);
            i = maxChild;
        }
        else {
            done = true;
        }
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = heapSort;
