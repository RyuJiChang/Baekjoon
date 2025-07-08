const input = require('fs').readFileSync('/dev/stdin').toString().trim()

console.log(input.replace(/^0+|0+$/g, '').split('').filter(el => el == '0').length)