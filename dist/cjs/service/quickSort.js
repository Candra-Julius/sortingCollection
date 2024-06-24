"use strict";
'use-strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _sortingPrototype = _interopRequireDefault(require("../Prototype/sortingPrototype.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class QuickSort extends _sortingPrototype.default {
  constructor(array, comparison) {
    super(comparison);
    this.array = array;
    this.tmp = [];
  }
  sort(order) {
    this.array = this.partition(this.array, order);
    return this.array;
  }
  partition(arr, order) {
    if (arr.length <= 1) return arr;
    const n = arr.length - 1;
    const pivot = arr[n];
    const leftArray = [];
    const rightArray = [];
    for (let i = 0; i < n; i++) {
      if (order == 'desc' ? this.getValue(arr[i]) > this.getValue(pivot) : this.getValue(arr[i]) < this.getValue(pivot)) leftArray.push(arr[i]);else rightArray.push(arr[i]);
    }
    if (leftArray.length > 0 && rightArray.length > 0) return [...this.partition(leftArray), pivot, ...this.partition(rightArray)];else if (leftArray.length > 0) return [...this.partition(leftArray), pivot];else return [pivot, ...this.partition(rightArray)];
  }
}
exports.default = QuickSort;
//# sourceMappingURL=quickSort.js.map