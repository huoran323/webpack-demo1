"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _errors = require("../errors");

var _utilities = require("../utilities");

var _query = _interopRequireDefault(require("./query"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Makes a query and expects exactly one result.
 *
 * @throws NotFoundError If query returns no rows.
 * @throws DataIntegrityError If query returns multiple rows.
 */
const one = async (log, connection, clientConfiguration, rawSql, values, inheritedQueryId) => {
  const queryId = inheritedQueryId || (0, _utilities.createQueryId)();
  const {
    rows
  } = await (0, _query.default)(log, connection, clientConfiguration, rawSql, values, queryId);

  if (rows.length === 0) {
    log.error({
      queryId
    }, 'NotFoundError');
    throw new _errors.NotFoundError();
  }

  if (rows.length > 1) {
    log.error({
      queryId
    }, 'DataIntegrityError');
    throw new _errors.DataIntegrityError();
  }

  return rows[0];
};

var _default = one;
exports.default = _default;
//# sourceMappingURL=one.js.map