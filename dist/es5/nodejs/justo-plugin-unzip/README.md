[![NPM version](http://img.shields.io/npm/v/justo-plugin-unzip.svg)](https://www.npmjs.org/package/justo-plugin-unzip)
[![Build Status](https://travis-ci.org/justojsp/justo-plugin-unzip.svg?branch=master)](https://travis-ci.org/justojsp/justo-plugin-unzip)
[![Dependency Status](https://david-dm.org/justojsp/justo-plugin-unzip.svg)](https://david-dm.org/justojsp/justo-plugin-unzip)
[![devDependency Status](https://david-dm.org/justojsp/justo-plugin-unzip/dev-status.svg)](https://david-dm.org/justojsp/justo-plugin-unzip#info=devDependencies)

Plugin to unzip files.

*Proudly made with ♥ in Valencia, Spain, EU.*

## Install

```
npm install justo-plugin-unzip
```

## Use

```
const unzip = require("justo-plugin-unzip");
```

The `unzip` task is as follows:

```
unzip(justoOpts, opts : object)
```

The `opts` parameter:

- `src` (string). File to unzip.
- `dst` (string). Directory where to unzip.

Example:

```
const unzip = require("justo-plugin-unzip");

unzip("Unzip file.zip", {
  src: "file.zip",
  dst: "unzip"
});
```
