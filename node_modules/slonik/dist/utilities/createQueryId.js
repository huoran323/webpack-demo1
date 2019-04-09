"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createUlid = _interopRequireDefault(require("./createUlid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createQueryId = () => {
  // eslint-disable-next-line no-extra-parens, flowtype/no-weak-types
  return (0, _createUlid.default)();
};

var _default = createQueryId;
exports.default = _default;
//# sourceMappingURL=createQueryId.js.map