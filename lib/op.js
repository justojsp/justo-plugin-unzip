//imports
import unzip from "justo-unzip";

/**
 * Task operation.
 */
export default function op(params, done) {
  var opts;

  //(1) arguments
  if (params.length >= 1) opts = params[0];
  if (!opts) opts = {};
  if (!opts.src) throw new Error("src expected.");
  if (!opts.dst) throw new Error("dst expected.");

  //(2) unzip
  unzip(opts.src, opts.dst, done);
}
