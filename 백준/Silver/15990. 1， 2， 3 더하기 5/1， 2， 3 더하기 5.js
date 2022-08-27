const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).slice(1)

let max = Math.max(...input)

let dp = [[1,0,0], [0,1,0], [1,1,1]]
for(let i = 3 ; i < max ; i++){
    dp[i] = [0,0,0]
}

for(let i = 3 ; i < max ; i++){
    dp[i][0] = (dp[i-1][1] + dp[i-1][2])%1000000009
    dp[i][1] = (dp[i-2][0] + dp[i-2][2])%1000000009
    dp[i][2] = (dp[i-3][0] + dp[i-3][1])%1000000009
}

let result = []
for(let i = 0 ; i < input.length ; i++){
    result.push((dp[input[i]-1][0] + dp[input[i]-1][1] + dp[input[i]-1][2])%1000000009)
}

console.log(result.join('\n'))