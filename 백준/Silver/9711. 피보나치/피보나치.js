const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1)
let dp = [0n , 1n]
let result = []

for(let i = 2 ; i <= 10000 ; i++){
    dp[i] = dp[i-1] + dp[i-2]
}

for(let i = 0 ; i < input.length ; i++){
    let a = Number(input[i].split(' ')[0])
    let b = BigInt(input[i].split(' ')[1])
    result.push(`Case #${i+1}: ${dp[a] % b}`)
}
console.log(result.join('\n'))