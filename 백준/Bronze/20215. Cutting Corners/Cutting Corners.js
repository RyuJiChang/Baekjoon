const [x, y] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
console.log(x+y - Math.sqrt(x**2 + y**2))