"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const isPrimitiveValueExpression = maybe => {
  return typeof maybe === 'string' || typeof maybe === 'number' || typeof maybe === 'boolean' || maybe === null;
};

var _default = isPrimitiveValueExpression;
exports.default = _default;
//# sourceMappingURL=isPrimitiveValueExpression.js.map