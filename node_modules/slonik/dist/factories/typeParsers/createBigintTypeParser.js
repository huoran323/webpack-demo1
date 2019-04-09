"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const bigintParser = value => {
  // @todo Use bigint when value is greater than Number.MAX_SAFE_INTEGER.
  return parseInt(value, 10);
};

const createBigintTypeParser = () => {
  return {
    name: 'int8',
    parse: bigintParser
  };
};

var _default = createBigintTypeParser;
exports.default = _default;
//# sourceMappingURL=createBigintTypeParser.js.map