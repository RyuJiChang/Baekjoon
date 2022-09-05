const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let dp = [0,1]
let result = []
for(let i = 2 ; i <= 490 ; i++){
    dp[i] = BigInt(dp[i-1]) + BigInt(dp[i-2])
}

for(let i = 0 ; i < input.length-1 ; i++){
    result.push(`Hour ${input[i]}: ${dp[input[i]].toString()} cow(s) affected`)
}


console.log(result.join('\n'))