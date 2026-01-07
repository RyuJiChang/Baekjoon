const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)
const target = input.indexOf(-1)

console.log(Math.min(...input.slice(0,target)) + Math.min(...input.slice(target+1)))