const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number)

let dp = [1n,1n]

for(let i = 2 ; i <= 100 ; i++){
    dp[i] = dp[i-1] * BigInt(i)
}

console.log(String(dp[input[0]] /  dp[input[1]] / dp[input[0] - input[1]]))