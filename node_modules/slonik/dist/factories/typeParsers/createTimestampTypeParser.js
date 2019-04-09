"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const timestampParser = value => {
  return value === null ? value : Date.parse(value);
};

const createTimestampTypeParser = () => {
  return {
    name: 'timestamp',
    parse: timestampParser
  };
};

var _default = createTimestampTypeParser;
exports.default = _default;
//# sourceMappingURL=createTimestampTypeParser.js.map