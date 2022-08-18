const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).slice(1)

let dp = [1n,1n,2n,4n]
for(let i = 4 ; i <= Math.max(...input) ; i++){
    dp[i] = dp[i-1] + dp[i-2] + dp[i-3] + dp[i-4]
}

for(let i = 0 ; i < input.length ; i++){
    console.log(String(dp[input[i]]))
}