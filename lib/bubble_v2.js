"use strict";
var swap_1 = require('./swap');
function bubbleSort(array) {
    array = array.slice();
    var i = array.length - 1;
    var j = 0;
    while (i > 0) {
        if (j === i) {
            j = 0;
            i--;
            continue;
        }
        if (array[j] > array[j + 1]) {
            swap_1.default(array, j, j + 1);
        }
        j++;
    }
    return array;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = bubbleSort;
//# sourceMappingURL=bubble_v2.js.map