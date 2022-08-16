const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number)
let dp = [1n , 1n]

for(let i = 2 ; i <= input[0] ; i++){
    dp[i] = dp[i-1]*BigInt(i) 
}

console.log(String(dp[input[0]-1] / dp[input[1]-1] / dp[input[0] - input[1]]))