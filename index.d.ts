export interface IOption {
    /**
     * order - asc (Default) || desc
     * 
     * use this option to set it either asc or desc
     *  */ 
    order?: String,
    /**
     * type - bubble || selection || insertion || quick || count
     * 
     * for now only these algorithm available, it will update soon
     *  */ 
    type: String,
    /**
     * persist - Set true if you want to modified the original value
     * 
     *  */ 
    persist: Boolean
}  

/**
 * @param {array} arr Array that will be sorted
 * @param {function} comparison A function that defines the sort order. Should return a number.
 * @param {object} option Option that contain order, type, and persist
 * @param {string} option.order asc (Default) || desc
 * @param {string} option.type bubble || selection || insertion 
 * @param {boolean} option.persist Set true if you want to modified the original value
 * @returns {array} Return sorted Array
 * This function accept 3 parameters array [], comparison (), option {}
 * 
 * In the option object there is 3 key order, type, persist
 * 
 * order - asc (Default) || desc
 * 
 * type - bubble || selection || insertion || quick || count
 * 
 * persist - Set true if you want to modified the original value
 */
export function sortingAlgorithm(array:Array<any>, comparison:Function, option:IOption):Array<any>;