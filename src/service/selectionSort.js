'use-strict'
const Prototype = require("../Prototype/sortingPrototype.js")

module.exports =  class SelectionSort extends Prototype{
    constructor(array, comparison){
        super(comparison)
        this.array = array
    }
    sort(order){
        const arr = this.array
        const n = arr.length    
        for(let i = 0; i < n; i++){
            let minIndex = i
            for (let j = i +1; j < n ; j++) {
                if(order == 'desc'?this.getValue(arr[j]) > this.getValue(arr[minIndex]):this.getValue(arr[j]) < this.getValue(arr[minIndex])) 
                    minIndex = j;
            }
            if(i !== minIndex)
                [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            
        }
        return arr
    }
}