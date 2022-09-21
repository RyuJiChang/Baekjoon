let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 0 ; i < input.length ; i++){
    if(i === 0 ){
        input[i] = input[i].split(' ').map(Number)
    }
    else{
        input[i] = Number(input[i])
    }
}
let dp = new Array(input[0][1]+1).fill(10001)
dp[0] = 0

for(let i = 1 ; i < input.length ; i++){
    for(let j = 1 ; j <= input[0][1] ; j++){
        if(input[i] <= j){
            dp[j] = Math.min(dp[j] , dp[j-input[i]] +1)
        }
    }
}
if(dp[input[0][1]] === 10001){
 console.log(-1)   
}
else{
console.log(dp[input[0][1]])    
}