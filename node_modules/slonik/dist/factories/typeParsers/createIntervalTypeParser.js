"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _postgresInterval = _interopRequireDefault(require("postgres-interval"));

var _iso8601Duration = require("iso8601-duration");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const intervalParser = value => {
  return value === null ? value : (0, _iso8601Duration.toSeconds)((0, _iso8601Duration.parse)((0, _postgresInterval.default)(value).toISOString()));
};

const createIntervalTypeParser = () => {
  return {
    name: 'interval',
    parse: intervalParser
  };
};

var _default = createIntervalTypeParser;
exports.default = _default;
//# sourceMappingURL=createIntervalTypeParser.js.map