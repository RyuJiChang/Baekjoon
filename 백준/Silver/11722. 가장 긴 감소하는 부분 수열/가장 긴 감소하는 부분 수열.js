const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)

let dp = new Array(input.length+1).fill(0)
let result = 0
for(let i = 0 ; i < input.length ; i++){
    let max = 0
    for(let j = 0 ; j < i ; j++){
        if(input[i] < input[j] && dp[j] > max){
            max = dp[j]
        } 
    }
    dp[i] = max +1
}
for(let i = 0 ; i < dp.length ; i++){
    if(result < dp[i]){
        result = dp[i]
    }
}

console.log(result)