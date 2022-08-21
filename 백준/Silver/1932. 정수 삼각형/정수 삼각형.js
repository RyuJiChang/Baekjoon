const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number)).slice(1)


let nums = input.length
let dp = []
for(let i = 1 ; i <= nums; i++){
    dp.push(new Array(i).fill(0))
}
dp[nums-1] = input[nums-1]

for(let i = nums-2 ; i >= 0 ; i--){
    for(let j = 0 ; j <= i ; j++){
        dp[i][j] = input[i][j] + Math.max(dp[i+1][j], dp[i+1][j+1])  
    }
}


console.log(dp[0][0])
