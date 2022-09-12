let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).slice(1)

let result = []
let dp = [0,1,2,2,3,3,6]
for(let i = 7 ; i <= Math.max(...input) ; i++){
    dp[i] = (dp[i-2] + dp[i-4] + dp[i-6])%1000000009
}

for(let i = 0 ; i < input.length ; i++){
    result.push(dp[input[i]])
}

console.log(result.join('\n'))