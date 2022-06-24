const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let low =Number(input[0].split(' ')[0])
let high =Number(input[0].split(' ')[1])
let nums =input[1].split(' ').map(Number)
let chance = 0
for(let i = 0 ; i < nums.length ; i++){
    if(nums[i] >= low && nums[i] <= high){
        chance += 1
    }
}
console.log(chance)