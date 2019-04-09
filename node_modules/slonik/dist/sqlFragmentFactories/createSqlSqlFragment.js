"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _errors = require("../errors");

const createSqlSqlFragment = (token, greatestParameterPosition) => {
  let sql = '';
  let leastMatchedParameterPosition = Infinity;
  let greatestMatchedParameterPosition = 0;
  sql += token.sql.replace(/\$(\d+)/g, (match, g1) => {
    const parameterPosition = parseInt(g1, 10);

    if (parameterPosition > greatestMatchedParameterPosition) {
      greatestMatchedParameterPosition = parameterPosition;
    }

    if (parameterPosition < leastMatchedParameterPosition) {
      leastMatchedParameterPosition = parameterPosition;
    }

    return '$' + (parameterPosition + greatestParameterPosition);
  });

  if (greatestMatchedParameterPosition > token.values.length) {
    throw new _errors.UnexpectedStateError('The greatest parameter position is greater than the number of parameter values.');
  }

  if (leastMatchedParameterPosition !== Infinity && leastMatchedParameterPosition !== 1) {
    throw new _errors.UnexpectedStateError('Parameter position must start at 1.');
  }

  return {
    sql,
    values: token.values
  };
};

var _default = createSqlSqlFragment;
exports.default = _default;
//# sourceMappingURL=createSqlSqlFragment.js.map