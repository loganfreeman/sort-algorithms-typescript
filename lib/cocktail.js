"use strict";
var swap_1 = require('./swap');
function cocktailSort(array) {
    array = array.slice();
    var left = 0;
    var right = array.length - 1;
    var swapped = true;
    while (left < right && swapped) {
        swapped = false;
        for (var i = left; i < right; i++) {
            if (array[i] > array[i + 1]) {
                swap_1.default(array, i, i + 1);
                swapped = true;
            }
        }
        right--;
        for (var i = right; i > left; i--) {
            if (array[i] < array[i - 1]) {
                swap_1.default(array, i, i - 1);
                swapped = true;
            }
        }
        left++;
    }
    return array;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = cocktailSort;
//# sourceMappingURL=cocktail.js.map