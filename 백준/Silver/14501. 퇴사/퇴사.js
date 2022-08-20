const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let num = Number(input[0])

let dp = new Array(num+5).fill(0)


for(let i = num ; i > 0 ; i--){
    let [a,b] = input[i].split(' ').map(Number)
    if(i+a-1 <= num){
        dp[i] = Math.max(dp[i+a] + b , dp[i+1])
    }
    else{
        dp[i] = dp[i+1]
    }
}
console.log(dp[1])