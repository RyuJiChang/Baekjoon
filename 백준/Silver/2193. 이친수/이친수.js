const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let dp = [0n,1n]

for(let i = 2 ; i <= input ; i++){
    dp[i] = dp[i-1] + dp[i-2]
}
console.log(String(dp[input]))