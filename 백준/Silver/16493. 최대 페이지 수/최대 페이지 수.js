const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let day = input[0].split(' ').map(Number)[0]
let page = input[0].split(' ').map(Number)[1]

for(let i = 1 ; i <= page ; i++){
    input[i] = input[i].split(' ').map(Number)
}

let dp = Array(day+1).fill(0)

for(let i = 1 ; i <= page ; i++){
    let [a,b] = input[i]
    for(let j = day ; j >= 1 ; j--){
        if(j >= input[i][0]){
            dp[j] = Math.max(dp[j] , dp[j-input[i][0]] + input[i][1])
        }
    }
}

console.log(dp[day])