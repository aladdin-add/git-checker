var checkBranch = require('./index.js')
const assert = require('assert')
const tman = require('tman')

tman.it('exports', function () {
  assert.strictEqual(checkBranch(), true)
})
