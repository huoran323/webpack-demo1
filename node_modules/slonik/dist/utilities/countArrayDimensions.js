"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const countArrayDimensions = identifierName => {
  let tail = identifierName.trim();
  let arrayDimensionCount = 0;

  while (tail.endsWith('[]')) {
    arrayDimensionCount++;
    tail = tail.trim().slice(0, -2);
  }

  return arrayDimensionCount;
};

var _default = countArrayDimensions;
exports.default = _default;
//# sourceMappingURL=countArrayDimensions.js.map