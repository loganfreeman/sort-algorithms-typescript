"use strict";
var swap_1 = require('./swap');
/**
 * Insertion sort
 * @see https://en.wikipedia.org/wiki/Insertion_sort
 * @param {Array} array
 * @return {Array}
 */
function insertionSort(array) {
    array = array.slice();
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = i + 1; j > 0; j--) {
            if (array[j] >= array[j - 1]) {
                break;
            }
            swap_1["default"](array, j, j - 1);
        }
    }
    return array;
}
exports.__esModule = true;
exports["default"] = insertionSort;
