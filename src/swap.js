"use strict";
/**
 * Swaps array elements
 * @param {Array} array
 * @param {Number} int1
 * @param {Number} int2
 */
function swap(array, int1, int2) {
    if (array[int1] === undefined || array[int2] === undefined) {
        throw new Error("\n            int1 is " + int1 + " - " + array[int1] + "\n            int2 is " + int2 + " - " + array[int2] + "\n        ");
    }
    var oldInt1 = array[int1];
    array[int1] = array[int2];
    array[int2] = oldInt1;
}
exports.__esModule = true;
exports["default"] = swap;
