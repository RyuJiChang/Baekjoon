const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
let size = Math.abs(input[0] - input[1])

let dp = []
for(let i = 0 ; i <= size+1 ; i++){
    dp.push(new Array(size+2).fill(0))
}
dp[1][0] = 1

for(let i = 1 ; i <= size+1 ; i++){
    for(let j = 1 ; j <= size+1 ; j++){
        if(i>=j){
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
}

console.log(dp[size+1][size+1])