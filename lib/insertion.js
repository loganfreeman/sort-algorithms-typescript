"use strict";
var swap_1 = require('./swap');
function insertionSort(array) {
    array = array.slice();
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = i + 1; j > 0; j--) {
            if (array[j] >= array[j - 1]) {
                break;
            }
            swap_1.default(array, j, j - 1);
        }
    }
    return array;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = insertionSort;
//# sourceMappingURL=insertion.js.map