let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const checker = input.shift()
input = input.join('\n')

console.log(input.replaceAll(checker, '@@').split('@@').length - 1)