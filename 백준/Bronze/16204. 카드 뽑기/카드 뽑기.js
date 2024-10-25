const [n,m,k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
console.log(Math.max(Math.min(m, k) + Math.min(n-m, n-k)))