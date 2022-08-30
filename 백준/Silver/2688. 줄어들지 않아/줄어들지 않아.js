const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let dp = []
let result = []
let max = Math.max(...input.slice(1))
for(let i = 0 ; i <= max ; i++){
    dp.push(new Array(10).fill(0))
}

for(let i = 0 ; i <10 ; i++){
    dp[1][i] = 1
}

for(let i = 2 ; i <= max ; i++){
    dp[i][0] = 1
}

for(let i = 2 ; i <= max ; i++){
    for(let j = 1 ; j < 10 ; j++){
        dp[i][j] = dp[i-1][j] + dp[i][j-1]
    }
}


for(let j = 1 ; j < input.length ; j++){
    let sum = 0
    for(let i = 0 ; i < 10 ; i++){
        sum += dp[input[j]][i]
    }
    result.push(sum)
}
console.log(result.join('\n'))