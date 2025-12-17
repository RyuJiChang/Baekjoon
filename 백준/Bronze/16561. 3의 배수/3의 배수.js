const input = require('fs').readFileSync('/dev/stdin').toString().trim()
console.log((input / 3 - 1) * (input / 3 - 2) / 2)