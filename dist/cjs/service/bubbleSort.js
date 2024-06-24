"use strict";
'use-strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _sortingPrototype = _interopRequireDefault(require("../Prototype/sortingPrototype.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class BubbleSort extends _sortingPrototype.default {
  constructor(array, comparison) {
    super(comparison);
    this.array = array;
  }
  sort(order) {
    const arr = this.array;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (order === 'desc' ? this.getValue(arr[j]) < this.getValue(arr[j + 1]) : this.getValue(arr[j]) > this.getValue(arr[j + 1])) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    return arr;
  }
}
exports.default = BubbleSort;
//# sourceMappingURL=bubbleSort.js.map