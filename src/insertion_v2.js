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
    var j = 1;
    var i = 1;
    while (i < array.length) {
        if (j === 0 || array[j] >= array[j - 1]) {
            i++;
            j = i;
            continue;
        }
        swap_1["default"](array, j, j - 1);
        j--;
    }
    return array;
}
exports.__esModule = true;
exports["default"] = insertionSort;
