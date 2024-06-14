'use-strict'
import Prototype from "../Prototype/sortingPrototype.mjs";

export default class QuickSort extends Prototype {
    constructor(array, comparison) {
        super(comparison)
        this.array = array
        this.tmp = []
    }
    sort(order){
        this.array = this.partition(this.array,order)
        return this.array
    }
    partition(arr,order) {
        if (arr.length <= 1) return arr
        const n = arr.length -1
        const pivot = arr[n]
        const leftArray = []
        const rightArray = []
        for(let i = 0; i < n; i++){
            if(order == 'desc'? this.getValue(arr[i]) > this.getValue(pivot):this.getValue(arr[i]) < this.getValue(pivot)) 
                leftArray.push(arr[i]);
            else rightArray.push(arr[i]);
        }
        if(leftArray.length > 0 && rightArray.length > 0) return [...this.partition(leftArray), pivot, ...this.partition(rightArray)];
        else if(leftArray.length > 0) return [...this.partition(leftArray), pivot];
        else return [pivot, ...this.partition(rightArray)];
    }
}