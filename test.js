var hasMergedTest = require('./index.js').hasMergedTest
var assert = require('assert')
var tman = require('tman')
var mergedMsg = ''

tman.it('hasMergedTest', function () {
  mergedMsg = 'Merge pull request #772 in HFE/xx from test to develop'
  assert.strictEqual(hasMergedTest(mergedMsg), true)
  mergedMsg = 'Merge pull request #772 in HFE/xx from test01 to develop'
  assert.strictEqual(hasMergedTest(mergedMsg), true)

  mergedMsg = 'Merge pull request #772 in HFE/xx from staging to develop'
  assert.strictEqual(hasMergedTest(mergedMsg), true)

  mergedMsg = 'Merge pull request #772 in HFE/xx from staging01 to develop'
  assert.strictEqual(hasMergedTest(mergedMsg), true)

  mergedMsg = 'Merge pull request #772 in HFE/xx from test to master'
  assert.strictEqual(hasMergedTest(mergedMsg), true)

  mergedMsg = 'Merge pull request #772 in HFE/xx from test01 to master'
  assert.strictEqual(hasMergedTest(mergedMsg), true)

  mergedMsg = 'Merge pull request #772 in HFE/xx from staging to master'
  assert.strictEqual(hasMergedTest(mergedMsg), true)

  mergedMsg = 'Merge pull request #772 in HFE/xx from staging01 to master'
  assert.strictEqual(hasMergedTest(mergedMsg), true)

  mergedMsg = 'Merge pull request #772 in HFE/xx from feature-xx to master'
  assert.strictEqual(hasMergedTest(mergedMsg), false)

  mergedMsg = 'Merge pull request #772 in HFE/xx from 1232423423 to master'
  assert.strictEqual(hasMergedTest(mergedMsg), false)
})
