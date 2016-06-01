"use strict";
function swap(array, int1, int2) {
    if (array[int1] === undefined || array[int2] === undefined) {
        throw new Error("\n            int1 is " + int1 + " - " + array[int1] + "\n            int2 is " + int2 + " - " + array[int2] + "\n        ");
    }
    var oldInt1 = array[int1];
    array[int1] = array[int2];
    array[int2] = oldInt1;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = swap;
