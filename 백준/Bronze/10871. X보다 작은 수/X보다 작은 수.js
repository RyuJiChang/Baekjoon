const input = require('fs').readFileSync('/dev/stdin').toString().split("\n")
const [amount, target] =input[0].split(' ').map(Number)
const nums =input[1].split(' ').map(Number).filter(el => el < target)
console.log(nums.join(' '))