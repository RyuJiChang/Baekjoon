const [x,y] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(BigInt)

console.log(String((x-y) / 2n + y))
console.log(String((x - y) / 2n))