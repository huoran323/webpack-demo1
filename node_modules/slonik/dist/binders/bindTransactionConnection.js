"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utilities = require("../utilities");

var _connectionMethods = require("../connectionMethods");

const bindTransactionConnection = (parentLog, connection, clientConfiguration, transactionDepth) => {
  const mapInvocation = fn => {
    const bound = (0, _utilities.mapTaggedTemplateLiteralInvocation)(fn);
    return taggedQuery => {
      if (transactionDepth !== connection.connection.slonik.transactionDepth) {
        return Promise.reject(new Error('Cannot run a query using parent transaction.'));
      }

      return bound(taggedQuery);
    };
  };

  return {
    any: mapInvocation(_connectionMethods.any.bind(null, parentLog, connection, clientConfiguration)),
    anyFirst: mapInvocation(_connectionMethods.anyFirst.bind(null, parentLog, connection, clientConfiguration)),
    many: mapInvocation(_connectionMethods.many.bind(null, parentLog, connection, clientConfiguration)),
    manyFirst: mapInvocation(_connectionMethods.manyFirst.bind(null, parentLog, connection, clientConfiguration)),
    maybeOne: mapInvocation(_connectionMethods.maybeOne.bind(null, parentLog, connection, clientConfiguration)),
    maybeOneFirst: mapInvocation(_connectionMethods.maybeOneFirst.bind(null, parentLog, connection, clientConfiguration)),
    one: mapInvocation(_connectionMethods.one.bind(null, parentLog, connection, clientConfiguration)),
    oneFirst: mapInvocation(_connectionMethods.oneFirst.bind(null, parentLog, connection, clientConfiguration)),
    query: mapInvocation(_connectionMethods.query.bind(null, parentLog, connection, clientConfiguration)),
    transaction: handler => {
      return (0, _connectionMethods.nestedTransaction)(parentLog, connection, clientConfiguration, handler, transactionDepth);
    }
  };
};

var _default = bindTransactionConnection;
exports.default = _default;
//# sourceMappingURL=bindTransactionConnection.js.map