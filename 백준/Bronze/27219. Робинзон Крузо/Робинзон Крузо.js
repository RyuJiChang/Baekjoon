const input = require('fs').readFileSync('/dev/stdin').toString().trim()
let result = 'V'.repeat(Math.floor(input/5)) + 'I'.repeat(input%5)

console.log(result)