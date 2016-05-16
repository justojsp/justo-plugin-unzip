"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = 





op;var _justoUnzip = require("justo-unzip");var _justoUnzip2 = _interopRequireDefault(_justoUnzip);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function op(params, done) {
  var opts;


  if (params.length >= 1) opts = params[0];
  if (!opts) opts = {};
  if (!opts.src) throw new Error("src expected.");
  if (!opts.dst) throw new Error("dst expected.");


  (0, _justoUnzip2.default)(opts.src, opts.dst, done);}