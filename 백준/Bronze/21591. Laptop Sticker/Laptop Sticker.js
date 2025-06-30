const [a,b,c,d] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
console.log((a >= c + 2) && (b >= d+2) ? 1 : 0)