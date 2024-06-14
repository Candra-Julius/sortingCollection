'use-strict'
import BubbleSort from "./bubbleSort.mjs";
import CountingSort from "./countingSort.mjs";
import InsertionSort from "./insertionSort.mjs";
import QuickSort from "./quickSort.mjs";
import SelectionSort from "./selectionSort.mjs";


export default {
    bubble: BubbleSort,
    selection: SelectionSort,
    insertion: InsertionSort,
    quick: QuickSort,
    count: CountingSort
}