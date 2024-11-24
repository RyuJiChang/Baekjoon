const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const nums = input[1].sort((a,b) => b - a)

console.log(nums[input[0][1] - 1])