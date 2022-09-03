const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)

let dp = new Array(input.length).fill(0)
let dp2 = new Array(input.length).fill(0)
let dpSum = new Array(input.length).fill(0)

for(let i = 0 ; i < input.length ; i++){
    let max = 0
    for(let j = 0 ; j < i ; j++){
        if(input[i] > input[j] && dp[j] > max){
            max = dp[j]
        } 
    }
    dp[i] = max +1
    dpSum[i] += dp[i]
}

for(let i = input.length-1 ; i >= 0 ; i--){
    let max = 0
    for(let j = input.length-1 ; j >= i ; j--){
        if(input[i] > input[j] && dp2[j] > max){
            max = dp2[j]
        } 
    }
    dp2[i] = max +1
    dpSum[i] += dp2[i]-1
}

console.log(Math.max(...dpSum))