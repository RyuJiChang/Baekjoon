const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let dp = new Array(input+1).fill(0)
dp[0] = 1
dp[1] = 1

for(let i = 2 ; i <= input ; i++){
    dp[i] = (1+dp[i-1]+dp[i-2])%1000000007
}

console.log(dp[input])