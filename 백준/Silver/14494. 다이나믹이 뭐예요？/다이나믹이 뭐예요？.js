const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number)

let max = Math.max(input[0], input[1])

let dp = []
for(let i = 0 ; i <= max ; i++){
    dp.push(new Array(max+1).fill(0n))
} 
for(let i = 1 ; i <= max ; i++){
    dp[1][i] = 1n
    dp[i][1] = 1n
}

for(let i = 2 ; i <= max ; i++){
    for(let j = 2 ; j <= max ; j++){
        dp[i][j] = (dp[i-1][j] + dp[i][j-1] + dp[i-1][j-1])%1000000007n
    }
}
console.log(String(dp[input[0]][input[1]]))