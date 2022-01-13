"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("./ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function convertRelatedObjectToType(data, relatedModel) {
  if (Array.isArray(data)) {
    if (data.length == 0) {
      return [];
    }

    if (typeof data[0] == 'string') {
      return _ApiClient["default"].convertToType(data, ['String']);
    } else {
      return _ApiClient["default"].convertToType(data, [relatedModel]);
    }
  } else {
    if (typeof data == 'string') {
      return _ApiClient["default"].convertToType(data, 'String');
    } else {
      return _ApiClient["default"].convertToType(data, relatedModel);
    }
  }
}

var _default = convertRelatedObjectToType;
exports["default"] = _default;