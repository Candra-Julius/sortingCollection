'use-strict'
export default class Prototype {
    constructor(comparison){
        this.comparison = comparison
    }
    getValue(obj){
        const value = this.comparison(obj)
        const int = parseInt(value)
        if(!int)throw 'Comparison function have to return integer';
        return value;
    }
}