"use strict";
'use-strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class Prototype {
  constructor(comparison) {
    this.comparison = comparison;
  }
  getValue(obj) {
    const value = this.comparison(obj);
    const int = parseInt(value);
    if (!int) throw 'Comparison function have to return integer';
    return value;
  }
}
exports.default = Prototype;
//# sourceMappingURL=sortingPrototype.js.map