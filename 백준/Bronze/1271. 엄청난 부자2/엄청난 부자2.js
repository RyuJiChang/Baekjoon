const [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(BigInt)
console.log(String(a/b))
console.log(String(a%b))