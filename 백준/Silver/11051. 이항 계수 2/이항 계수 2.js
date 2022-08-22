const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number)
let [a,b] = input
let dp = [1n,1n]

for(let i = 2 ; i <= a ; i++){
    dp[i] = dp[i-1] * BigInt(i)
}

console.log(String(dp[a]/dp[b]/dp[a-b]%10007n))