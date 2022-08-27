const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).slice(1)

let result = []
let dp = [1,1,2]

for(let i = 3 ; i <= 1000000 ; i++){
    dp[i] = (dp[i-1] + dp[i-2] + dp[i-3])%1000000009
}

for(let i = 0 ; i < input.length ; i++){
    result.push(dp[input[i]])
}

console.log(result.join('\n'))