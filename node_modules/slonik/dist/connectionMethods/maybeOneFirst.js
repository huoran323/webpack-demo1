"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utilities = require("../utilities");

var _errors = require("../errors");

var _maybeOne = _interopRequireDefault(require("./maybeOne"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Makes a query and expects exactly one result.
 * Returns value of the first column.
 *
 * @throws DataIntegrityError If query returns multiple rows.
 */
const maybeOneFirst = async (log, connection, clientConfiguration, rawSql, values, inheritedQueryId) => {
  const queryId = inheritedQueryId || (0, _utilities.createQueryId)();
  const row = await (0, _maybeOne.default)(log, connection, clientConfiguration, rawSql, values, queryId);

  if (!row) {
    return null;
  }

  const keys = Object.keys(row);

  if (keys.length !== 1) {
    log.error({
      queryId
    }, 'DataIntegrityError');
    throw new _errors.DataIntegrityError();
  }

  return row[keys[0]];
};

var _default = maybeOneFirst;
exports.default = _default;
//# sourceMappingURL=maybeOneFirst.js.map