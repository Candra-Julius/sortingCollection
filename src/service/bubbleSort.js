'use-strict'
const Prototype = require("../Prototype/sortingPrototype.js");


module.exports =  class BubbleSort extends Prototype{
    constructor(array, comparison) {
        super(comparison)
        this.array = array;
      } 
    sort(order){
        const arr = this.array        
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i - 1; j++){
                if (order ===  'desc'? this.getValue(arr[j]) < this.getValue(arr[j + 1]): this.getValue(arr[j]) > this.getValue(arr[j + 1])) 
                    [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
        return arr
    }
}


