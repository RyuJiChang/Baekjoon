let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let dp = [0,1,2,3,4,5,6]

for(let i = 7 ; i <= input ; i++){
    dp[i] = Math.max(dp[i-1]+1, dp[i-3]*2, dp[i-4]*3, dp[i-5]*4, dp[i-6]*5)
}

console.log(dp[input])