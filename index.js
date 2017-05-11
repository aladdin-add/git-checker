var shell = require('shelljs')

module.exports.hasMergedTest = function (msg) {
  var reg = /merge.*from (test|staging)\w* to (develop|master)/i
  msg = msg || shell.exec('git log --merges')
  var mergeTestMsg = reg.exec(msg)
  if (mergeTestMsg) {
    console.log('您的分支似乎merge过' + mergeTestMsg[1] + '：')
    console.log(mergeTestMsg[0])
    return true
  }
  return false
}
