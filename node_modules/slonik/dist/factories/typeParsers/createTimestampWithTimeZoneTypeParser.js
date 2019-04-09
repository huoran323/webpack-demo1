"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const timestampParser = value => {
  return value === null ? value : Date.parse(value);
};

const createTimestampWithTimeZoneTypeParser = () => {
  return {
    name: 'timestamptz',
    parse: timestampParser
  };
};

var _default = createTimestampWithTimeZoneTypeParser;
exports.default = _default;
//# sourceMappingURL=createTimestampWithTimeZoneTypeParser.js.map