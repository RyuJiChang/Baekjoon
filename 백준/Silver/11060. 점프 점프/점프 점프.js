const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)

let num = input.length

let dp = new Array(num+101).fill(Infinity)
dp[1] = 0
for(let i = 0 ; i < num ; i++){
    for(let j = i+2 ; j < i+2+input[i] ; j++){
        dp[j] = Math.min(dp[i+1] + 1 , dp[j])
    } 
}

console.log((dp[num] === Infinity ? -1 : dp[num]))