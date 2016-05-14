"use strict";
var _justo = require("justo");


var NS = "org.justojs.plugins";


module.exports = (0, _justo.simple)({ ns: NS, name: "unzip" }, require("./lib/op").default);