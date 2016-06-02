"use strict";
var swap_1 = require('./swap');
function bubbleSort(array) {
    array = array.slice();
    for (var i = array.length - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                swap_1.default(array, j, j + 1);
            }
        }
    }
    return array;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = bubbleSort;
//# sourceMappingURL=bubble.js.map