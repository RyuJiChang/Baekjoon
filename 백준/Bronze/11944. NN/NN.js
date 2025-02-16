const [n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')

console.log(n.repeat(n).slice(0,m))
