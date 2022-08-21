const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let dp = [1n,1n]
let result = []
for(let i = 2 ; i < 251 ; i++){
    if(i%2){
        dp[i] = dp[i-1] * 2n - 1n
    }
    else{
        dp[i] = dp[i-1] * 2n + 1n
    }
}

for(let i = 0 ; i < input.length ; i++){
    console.log(String(dp[input[i]]))
}

