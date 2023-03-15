const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

const dp = [0,1]

for(let i = 2 ; i <= input ; i++){
    dp[i] = dp[i-1] + dp[i-2]
}

console.log(dp[input])