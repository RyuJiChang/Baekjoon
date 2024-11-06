const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const [n, k] = input.shift()

input[0].sort((a,b) => a-b)

console.log(input[0][k-1])