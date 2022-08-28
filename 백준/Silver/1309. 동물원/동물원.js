const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let dp = [1n,3n]
for(let i = 2 ; i <= input ; i++){
    dp[i] = (dp[i-1]*2n  + dp[i-2])%9901n
}

console.log(String(dp[input]))