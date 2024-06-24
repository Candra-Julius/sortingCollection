'use-strict'
const BubbleSort =  require("./bubbleSort.js");
const CountingSort =  require("./countingSort.js");
const InsertionSort =  require("./insertionSort.js");
const QuickSort =  require("./quickSort.js");
const SelectionSort =  require("./selectionSort.js");


module.exports =  {
    bubble: BubbleSort,
    selection: SelectionSort,
    insertion: InsertionSort,
    quick: QuickSort,
    count: CountingSort
}