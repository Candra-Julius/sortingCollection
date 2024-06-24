'use-strict'
import Prototype from "../Prototype/sortingPrototype.js"

export default class CountingSort extends Prototype {
    constructor(array, constructor) {
        super(constructor)
        this.array = array;
    }
    sort(order){
        let idx = 0
        const arr = this.array
        const max = Math.max(...arr.map(v=>this.getValue(v)))
        const min = Math.abs(Math.min(...arr.map(v=>this.getValue(v))))
        const countArr = Array(max+min+1).fill(0)
        const ressArr = Array(arr.length-1)
        for(let k = 0; k < arr.length; k++) countArr[this.getValue(arr[k])+min]++;
        for(let i = 1; i < countArr.length; i++) countArr[i] += countArr[i-1]; 
        for(let j = arr.length -1; j >=0; j-- ){
            if(order == 'asc'){
                ressArr[countArr[this.getValue(arr[j])+min]-1] = arr[j];
            }else{
                ressArr[Math.abs(countArr[this.getValue(arr[j])+min]-arr.length)] = arr[j];
            }
            countArr[this.getValue(arr[j])+min]--;
        }
        this.array = ressArr
        return this.array
    }
}