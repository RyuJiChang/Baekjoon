const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1)

for(let i = 0 ; i < input.length ; i++){
    input[i] = input[i].split(' ').map(Number)
}
let num = input[1].length
let dp = []
for(let i = 0 ; i < num ; i++){
    dp.push(new Array(num).fill(0n))
}
dp[0][0] = 1n
for(let i = 0 ; i < num ; i++){
    for(let j = 0 ; j < num ; j++){
        if(dp[i][j+input[i][j]] !== undefined && input[i][j] !== 0){
            dp[i][j+input[i][j]] += dp[i][j]
        }
        if(dp[i+input[i][j]] !== undefined && dp[i+input[i][j]][j] !== undefined && input[i][j] !== 0){
            dp[i+input[i][j]][j] += dp[i][j]
        }
    }
}

console.log(String(dp[num-1][num-1]))