"use strict";
'use-strict';

var BubbleSort = require("./bubbleSort.js");
var CountingSort = require("./countingSort.js");
var InsertionSort = require("./insertionSort.js");
var QuickSort = require("./quickSort.js");
var SelectionSort = require("./selectionSort.js");
module.exports = {
  bubble: BubbleSort,
  selection: SelectionSort,
  insertion: InsertionSort,
  quick: QuickSort,
  count: CountingSort
};
//# sourceMappingURL=map.js.map