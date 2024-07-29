const [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
console.log(b * 3.141592 * 2 + a * 2)