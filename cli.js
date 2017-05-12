#!/usr/bin/env node
var gc = require('./index.js')

if (gc.hasMergedTest()) {
  process.exitCode = 1
}
