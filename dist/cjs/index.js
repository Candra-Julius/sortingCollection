"use strict";
'use-strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _map = _interopRequireDefault(require("./service/map.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * 
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
function sortingAlgorithm(arr, comparison = x => x, {
  order = 'asc',
  persist = false,
  type
}) {
  if (typeof comparison !== 'function') throw 'function comparison must be a function';
  if (!_map.default[type]) {
    throw `${type} is unknown type. please use either one of this 
    bubble || selection || insertion || quick || count`;
  }
  const array = persist ? arr : [...arr];
  const sorting = new _map.default[type](array, comparison);
  return sorting.sort(order);
}
var _default = exports.default = sortingAlgorithm; // ESM export
module.exports = sortingAlgorithm; // CJS export
//# sourceMappingURL=index.js.map