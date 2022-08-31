const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let dp = []
let result = []
for(let i = 0 ; i <= input ; i++){
    dp.push(new Array(10).fill(0))
}

for(let i = 0 ; i <10 ; i++){
    dp[1][i] = 1
}

for(let i = 2 ; i <= input ; i++){
    dp[i][0] = 1
}

for(let i = 2 ; i <= input ; i++){
    for(let j = 1 ; j < 10 ; j++){
        dp[i][j] = (dp[i-1][j] + dp[i][j-1])%10007
    }
}


let sum = 0
for(let i = 0 ; i < 10 ; i++){
    sum += dp[input][i]
}
console.log(sum%10007)
