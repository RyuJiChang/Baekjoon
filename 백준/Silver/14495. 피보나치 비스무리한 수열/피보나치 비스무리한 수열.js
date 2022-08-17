const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let dp = [1n,1n,1n,1n]

for(let i = 4 ; i <= input ; i++){
    dp[i] = dp[i-1] +dp[i-3]
}

console.log(String(dp[input]))