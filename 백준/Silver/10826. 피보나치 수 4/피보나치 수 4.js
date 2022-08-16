const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let dp = [0,1]

for(let i = 1 ; i < input ; i++){
    dp[i+1] = BigInt(dp[i]) + BigInt(dp[i-1])
}

console.log(dp[input].toString())
