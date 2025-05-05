const input = require('fs').readFileSync('/dev/stdin').toString().split("\n")
console.log(input[0] * 1000 + input[1] * 10000)