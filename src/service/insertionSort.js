'use-strict'
const Prototype = require("../Prototype/sortingPrototype.js")

module.exports =  class InsertionSort extends Prototype{
    constructor(array, comparison){
        super(comparison)
        this.array = array
    }
    sort(order){
        let arr = this.array
        const n = arr.length
        for(let i = 0; i < n;i++){
            for(let j = i; j > 0; j--){
                if(order === 'desc'? this.getValue(arr[j]) > this.getValue(arr[j -1]):this.getValue(arr[j]) < this.getValue(arr[j -1]))
                    [arr[j],arr[j-1]] = [arr[j -1],arr[j]]; 
            }
        }
        return arr
    }
}