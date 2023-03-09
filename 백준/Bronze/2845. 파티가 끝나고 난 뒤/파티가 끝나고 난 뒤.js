const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let nums = input[0].split(' ').map(Number)
let partys = input[1].split(' ').map(Number)
let result = []
for(let el of partys){
  result.push(el - nums[0]*nums[1])  
}
console.log(result.join(' '))
