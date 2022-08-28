const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let num = Number(input[0])
for(let i = 1 ; i <= num ; i++){
    input[i] = input[i].split(' ').map(Number)
}
let dp = new Array(num+1).fill(0)
dp[1] = input[1][2]

for(let i = 2 ; i <= num ; i++){
    let [a,b,c] = input[i]
    dp[i] = Math.max(dp[i-2] + input[i][2] , dp[i-1])
    
}
console.log(dp[num])