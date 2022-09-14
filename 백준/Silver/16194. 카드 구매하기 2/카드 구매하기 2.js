let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)

input.unshift(0)
let num = input.length
let dp = new Array(num).fill(0)
for(let i = 0 ; i < num ; i++){
    dp[i] = i * input[1]
}

for(let i = 1 ; i < num ;  i++){
    for(let j = 1 ; j < num ;  j++){
        if(j >= i){
            dp[j] = Math.min(dp[j - i] + input[i] , dp[j])
        }
    }
}

console.log(dp[num-1])