let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).slice(1)

let dp = [[0,1],[1,0],[1,1],[2,2],[3,4]]

for(let i = 5 ; i <= Math.max(...input) ; i++){
    dp[i] = [(dp[i-1][1]+dp[i-2][1]+dp[i-3][1])%1000000009,(dp[i-1][0]+dp[i-2][0]+dp[i-3][0])%1000000009]
}

let result = []

for(let i = 0 ; i < input.length ; i++){
    result.push(dp[input[i]].join(' '))
}

console.log(result.join('\n'))