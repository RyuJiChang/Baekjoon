let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let direction = input.slice(1)
let dp = []
for(let i = 0 ; i < direction.length ; i++){
    dp.push(new Array(direction[0].length).fill(1))
}

for(let i = 0 ; i < direction.length ; i++){
    for(let j = 0 ; j < direction[0].length ; j++){
        if(direction[i][j] === 'B'){
            dp[i][j+1] = (dp[i][j+1] + dp[i][j])%1000000009
            dp[i+1][j] = (dp[i+1][j] + dp[i][j])%1000000009
        }
        else if(direction[i][j] === 'S'){
            dp[i+1][j] = (dp[i+1][j] + dp[i][j])%1000000009
        }
        else if(direction[i][j] === 'E'){
            dp[i][j+1] = (dp[i][j+1] + dp[i][j])%1000000009
        }
    }
}
console.log(dp[direction.length-1][direction[0].length-1])