"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utilities = require("../utilities");

var _query = _interopRequireDefault(require("./query"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Makes a query and expects any number of results.
 */
const any = async (log, connection, clientConfiguration, rawSql, values, inheritedQueryId) => {
  const queryId = inheritedQueryId || (0, _utilities.createQueryId)();
  const {
    rows
  } = await (0, _query.default)(log, connection, clientConfiguration, rawSql, values, queryId);
  return rows;
};

var _default = any;
exports.default = _default;
//# sourceMappingURL=any.js.map