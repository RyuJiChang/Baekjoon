const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let dp = [1,1]
for(let i = 2 ; i <= input[0] ; i++){
    dp[i] = dp[i-1] + dp[i-2]
}

let arr = input.slice(2)
arr.unshift(0)
arr.push(input[0]+1)

let result = 1

if(arr.length === 2){
    console.log(dp[input[0]])
}
else{
for(let i = 0 ; i < arr.length-1 ; i++){
    result *= (dp[arr[i+1] - arr[i] - 1])
}

console.log(result)
}