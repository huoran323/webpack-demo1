"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const stripArrayNotation = identifierName => {
  let tail = identifierName.trim();

  while (tail.endsWith('[]')) {
    tail = tail.trim().slice(0, -2);
  }

  return tail;
};

var _default = stripArrayNotation;
exports.default = _default;
//# sourceMappingURL=stripArrayNotation.js.map