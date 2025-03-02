const [a,b,c] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
console.log(Math.min(b + c * 2, a + c, a * 2 + b)*2)