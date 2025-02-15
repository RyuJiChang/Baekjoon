const input = require('fs').readFileSync('/dev/stdin').toString().trim()
console.log(input % 7 == 2 ? 1 : 0)