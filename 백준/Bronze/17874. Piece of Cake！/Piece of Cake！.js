const [n,h,v] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
console.log(Math.max(h, n-h) * Math.max(v, n-v) * 4)