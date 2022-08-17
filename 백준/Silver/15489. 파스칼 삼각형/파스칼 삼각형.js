const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number)

let dp = [1n , 1n]
let result = 0n

for(let i = 2 ; i <= input[0] + input[2] ; i++){
    dp[i] = dp[i-1]*BigInt(i) 
}

function calculate(a,b){
 return dp[a - 1] / dp[b - 1] / dp[a - b]    
}

for(let i = input[0] ; i < input[0] + input[2] ; i++){
    for(let j = input[1] ; j <= input[1] + i -input[0] ; j++){
        result += calculate(i,j)
    }
}

console.log(String(result))