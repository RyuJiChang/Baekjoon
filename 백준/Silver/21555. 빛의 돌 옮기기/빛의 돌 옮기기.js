const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 0 ; i < input.length ; i++){
    input[i] = input[i].split(' ').map(Number)
}

let dp = []
for(let i = 0 ; i < 2 ; i++){
   dp.push(new Array(input[0][0]+1).fill(0))
}

for(let i = 1 ; i <= input[0][0] ; i++){
    for(let j = 0 ; j < 2 ; j++){
        if(j === 0){
            dp[0][i] = Math.min(dp[0][i-1] + input[1][i-1] , dp[1][i-1] + input[1][i-1] + input[0][1])
        }
        else{
           dp[1][i] = Math.min(dp[1][i-1] + input[2][i-1] , dp[0][i-1] + input[2][i-1] + input[0][1])
        }
    }
}
console.log(Math.min(dp[0][input[0][0]],dp[1][input[0][0]]))