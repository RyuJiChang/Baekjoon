const [min, max] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).sort((a,b) => a-b)
console.log(Math.max(Math.min(min, max/3), Math.min(min / 2, max / 2)))