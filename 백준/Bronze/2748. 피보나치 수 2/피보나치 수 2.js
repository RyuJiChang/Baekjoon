const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let dp = [0,1]

for(let i = 2 ; i <= input ; i++){
    dp[i] = BigInt(dp[i-1]) + BigInt(dp[i-2])
}
console.log(dp[input].toString())