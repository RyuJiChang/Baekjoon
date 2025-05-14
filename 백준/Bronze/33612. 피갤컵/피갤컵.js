const input = require('fs').readFileSync('/dev/stdin').toString().trim()

console.log(2024 +  Math.floor((input * 7/12)), input*7 % 12 + 1)
