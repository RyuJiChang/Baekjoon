const input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number)
let a = input[0]
let b = a.toString(2).split('').reverse().join('')
console.log(parseInt(BigInt(b),2))