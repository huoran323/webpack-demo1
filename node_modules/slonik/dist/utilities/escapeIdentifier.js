"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @see https://github.com/brianc/node-postgres/blob/6c840aabb09f8a2d640800953f6b884b6841384c/lib/client.js#L306-L322
 */
const escapeIdentifier = identifier => {
  return '"' + identifier.replace(/"/g, '""') + '"';
};

var _default = escapeIdentifier;
exports.default = _default;
//# sourceMappingURL=escapeIdentifier.js.map