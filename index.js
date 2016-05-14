//imports
import {simple} from "justo";

//internal data
const NS = "org.justojs.plugins";

//api
module.exports = simple({ns: NS, name: "unzip"}, require("./lib/op").default);
