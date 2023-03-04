const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(BigInt)
let a =input[0]
let b =input[1]
let result = '' + a/b + '\n' + a%b;
console.log(result)