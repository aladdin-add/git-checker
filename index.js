var shell = require('shelljs')

// 检查当前分支是否 merge 过 test/staging
module.exports.hasMergedTest = function (msg) {
  var regs = [
    /merge.*from (test|staging)\w* to (develop|master)/i,      // remote merged.
    /merge branch '(test|staging)\w*'/i                        // local merged.
  ]

  msg = msg || shell.exec('git log --merges', {silent: true})

  return regs.some(function (item) {
    // check commit message
    // 如果merged test/staging, return ture;
    var rs = item.exec(msg)
    rs && console.log('您的分支似乎merge过' + rs[1] + '：\n', rs[0])
    return !!rs
  })
}
