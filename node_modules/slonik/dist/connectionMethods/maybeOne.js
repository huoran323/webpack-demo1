"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utilities = require("../utilities");

var _errors = require("../errors");

var _query = _interopRequireDefault(require("./query"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Makes a query and expects exactly one result.
 *
 * @throws DataIntegrityError If query returns multiple rows.
 */
const maybeOne = async (log, connection, clientConfiguration, rawSql, values, inheritedQueryId) => {
  const queryId = inheritedQueryId || (0, _utilities.createQueryId)();
  const {
    rows
  } = await (0, _query.default)(log, connection, clientConfiguration, rawSql, values, queryId);

  if (rows.length === 0) {
    return null;
  }

  if (rows.length > 1) {
    log.error({
      queryId
    }, 'DataIntegrityError');
    throw new _errors.DataIntegrityError();
  }

  return rows[0];
};

var _default = maybeOne;
exports.default = _default;
//# sourceMappingURL=maybeOne.js.map