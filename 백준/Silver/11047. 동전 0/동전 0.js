const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let price = Number(input[0].split(' ')[1])
let nums = input.slice(1).map(Number)
let num = nums.length -1
let count = 0
while(price > 0){
if(Math.floor(price/nums[num])){
    count += Math.floor(price/nums[num])
    price = price%nums[num]
}
num -= 1
}
console.log(count)