const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 0 ; i < input.length ; i++){
    input[i] = input[i].split(' ').map(Number)
}
let nums = input[0][0] 
let dest = input[0][1]
let arrs = input.slice(1).sort((a,b) => a[1] - b[1])
let dp = []

for(let i = 0 ; i <= dest ; i++){
    dp[i] = i
}

for(let i = 0 ; i < nums ; i++){
    let [a,b,c] = arrs[i]
    for(let j = 1 ; j <= dest ; j++){
        if(j === b){
            dp[j] = Math.min(dp[j-1]+1 , dp[j-b+a] + c , dp[j])    
        }
        else{            
            dp[j] = Math.min(dp[j-1]+1 , dp[j])
        }
    }
}
console.log(dp[dest])