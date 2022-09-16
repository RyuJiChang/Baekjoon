let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

let dp = new Array(input[0]+1).fill(0)
dp[0] = 1

for(let i = 1 ; i <= input[0] ; i++){
    if(i >= input[1]){
        dp[i] = (dp[i-1] + dp[i-input[1]])%1000000007
    }
    else{
        dp[i] = dp[i-1]%1000000007
    }
}
console.log(dp[input[0]])