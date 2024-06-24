"use strict";
'use-strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _map = _interopRequireDefault(require("./service/map.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
function sortingAlgorithm(arr) {
  var comparison = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (x) {
    return x;
  };
  var _ref = arguments.length > 2 ? arguments[2] : undefined,
    _ref$order = _ref.order,
    order = _ref$order === void 0 ? 'asc' : _ref$order,
    _ref$persist = _ref.persist,
    persist = _ref$persist === void 0 ? false : _ref$persist,
    type = _ref.type;
  if (typeof comparison !== 'function') throw 'function comparison must be a function';
  if (!_map["default"][type]) {
    throw "".concat(type, " is unknown type. please use either one of this \n    bubble || selection || insertion || quick || count");
  }
  var array = persist ? arr : _toConsumableArray(arr);
  var sorting = new _map["default"][type](array, comparison);
  return sorting.sort(order);
}
var _default = exports["default"] = sortingAlgorithm; // ESM export
module.exports = sortingAlgorithm; // CJS export
//# sourceMappingURL=index.js.map