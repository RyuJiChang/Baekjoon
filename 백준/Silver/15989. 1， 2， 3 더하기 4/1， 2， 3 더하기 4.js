const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).slice(1)

let max = Math.max(...input)
let dp = [0,1,2,3]
let result = []
for(let i =4 ; i <= max ; i++){
    dp[i] = dp[i-3] + Math.floor(i/2) + 1
}
for(let i = 0 ; i < input.length; i++){
    result.push(dp[input[i]])
}

console.log(result.join('\n'))
