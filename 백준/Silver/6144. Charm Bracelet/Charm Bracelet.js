const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 0 ; i < input.length ; i++){
    input[i] = input[i].split(' ').map(Number)
}

let nums = input[0][0]
let weight = input[0][1]
let dp = new Array(weight+1).fill(0)

for(let i = 1 ; i <= nums ; i++){
    for(let j = weight ; j >= 1 ; j--){
        if(j >= input[i][0]){
            dp[j] = Math.max(dp[j] , dp[j-input[i][0]] + input[i][1])
    }
}
}

console.log(dp[weight])
    