"use strict";
var swap_1 = require('./swap');
/**
 * Comb sort
 * @see https://en.wikipedia.org/wiki/Comb_sort
 * @param {Array} array
 * @return {Array}
 */
function cocktailSort(array) {
    array = array.slice();
    var gap = array.length;
    var swapped = false;
    while (swapped || gap > 1) {
        if (gap > 1) {
            gap = Math.floor(gap / 1.247);
        }
        swapped = false;
        for (var i = 0; i + gap < array.length; i++) {
            if (array[i] > array[i + gap]) {
                swap_1["default"](array, i, i + gap);
                swapped = true;
            }
        }
    }
    return array;
}
exports.__esModule = true;
exports["default"] = cocktailSort;
