"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ulid = require("ulid");

const ulid = (0, _ulid.factory)((0, _ulid.detectPrng)(true));

const createUlid = () => {
  return ulid();
};

var _default = createUlid;
exports.default = _default;
//# sourceMappingURL=createUlid.js.map