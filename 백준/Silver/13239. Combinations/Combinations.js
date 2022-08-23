const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1)
let dp = [1n, 1n]
let result = []

for(let i = 0 ; i < input.length ; i++){
    input[i] = input[i].split(' ').map(Number)
}
for(let i = 2 ; i <= 1000 ; i++){
    dp[i] = dp[i-1] * BigInt(i)
}

for(let i = 0 ; i < input.length ; i++){
    result.push(String(((dp[input[i][0]]/dp[input[i][1]])/dp[input[i][0]-input[i][1]])%1000000007n))
}
console.log(result.join('\n'))