const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let dp = [BigInt(0) , BigInt(1)]

for(let i = 1 ; i < input ; i++){
    dp[i+1] = BigInt(dp[i])+BigInt(dp[i-1])
}

console.log(String(dp[input] * BigInt(4) + dp[input-1] * BigInt(2)))