const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let dp = [0,1,1,2]

for(let i = 4 ; i <= input ; i++){
    dp[i] = (dp[i-1] + dp[i-3])%1000000009
}
console.log(dp[input])