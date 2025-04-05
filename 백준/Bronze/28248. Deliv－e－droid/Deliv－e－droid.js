const [x, y] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
console.log(x*50 - y*10 +(x > y ? 500 : 0))