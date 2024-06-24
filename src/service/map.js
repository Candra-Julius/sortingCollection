'use-strict'
import BubbleSort from "./bubbleSort.js";
import CountingSort from "./countingSort.js";
import InsertionSort from "./insertionSort.js";
import QuickSort from "./quickSort.js";
import SelectionSort from "./selectionSort.js";


export default {
    bubble: BubbleSort,
    selection: SelectionSort,
    insertion: InsertionSort,
    quick: QuickSort,
    count: CountingSort
}