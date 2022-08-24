const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let nums = input[0]
if(nums === 1){
    console.log(input[1])
}
else if(nums === 2){
  console.log(input[1]+input[2])  
}
else{
let dp = [ 0, input[1], input[1]+input[2]]
for(let i = 4; i <= nums ; i++){
    dp[i] = 0
}
for(let i = 3 ; i <= nums ; i++){
    dp[i] = Math.max(input[i] + input[i-1] + dp[i-3] , input[i] + dp[i-2] , dp[i-1]) 
}
console.log(Math.max(dp[nums] , dp[nums-1]))
}