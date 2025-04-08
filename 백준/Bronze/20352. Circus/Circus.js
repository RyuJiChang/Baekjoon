const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const point = 3.5449077018125

console.log(Math.sqrt(input) * point)