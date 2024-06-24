"use strict";
'use-strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _sortingPrototype = _interopRequireDefault(require("../Prototype/sortingPrototype.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class SelectionSort extends _sortingPrototype.default {
  constructor(array, comparison) {
    super(comparison);
    this.array = array;
  }
  sort(order) {
    const arr = this.array;
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (order == 'desc' ? this.getValue(arr[j]) > this.getValue(arr[minIndex]) : this.getValue(arr[j]) < this.getValue(arr[minIndex])) minIndex = j;
      }
      if (i !== minIndex) [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
  }
}
exports.default = SelectionSort;
//# sourceMappingURL=selectionSort.js.map