const [a,b,c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
console.log(((a <= c) && (c < b)) ? 1 : 0)