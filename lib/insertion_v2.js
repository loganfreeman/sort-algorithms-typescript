"use strict";
var swap_1 = require('./swap');
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
        swap_1.default(array, j, j - 1);
        j--;
    }
    return array;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = insertionSort;
//# sourceMappingURL=insertion_v2.js.map