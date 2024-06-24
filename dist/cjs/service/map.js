"use strict";
'use-strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _bubbleSort = _interopRequireDefault(require("./bubbleSort.js"));
var _countingSort = _interopRequireDefault(require("./countingSort.js"));
var _insertionSort = _interopRequireDefault(require("./insertionSort.js"));
var _quickSort = _interopRequireDefault(require("./quickSort.js"));
var _selectionSort = _interopRequireDefault(require("./selectionSort.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = {
  bubble: _bubbleSort.default,
  selection: _selectionSort.default,
  insertion: _insertionSort.default,
  quick: _quickSort.default,
  count: _countingSort.default
};
//# sourceMappingURL=map.js.map