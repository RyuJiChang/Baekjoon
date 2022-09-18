let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).slice(1)

let dp = [input[0],Math.max(input[1],input[0] + Math.floor(input[1]/2)), Math.max(input[0]+input[2], input[0] + Math.floor(input[1]/2), input[1] +Math.floor(input[2]/2))]
if(input.length === 1){
    console.log(dp[0])
}
else if(input.length === 2){
  console.log(dp[1])  
}
else{
    for(let i = 3 ; i < input.length ; i++){
        dp[i] = Math.max(Math.floor(input[i]/2) + input[i-1] + dp[i-3] , input[i] + dp[i-2] , dp[i-1]) 
    }
    console.log(dp[input.length-1])
}