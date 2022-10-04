let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 0 ; i < input.length ; i++){
    input[i] = input[i].split(' ').map(Number)
}

let time = input[0][0]
let unit = input[0][1]
let dp = new Array(time+1).fill(0)

for(let i = 1 ; i <= unit ; i++){
    let [b,a] = input[i]
    for(let j = time ; j > 0 ; j--){
        if(j >= a){
            dp[j] = Math.max(dp[j],dp[j-a]+b)
        }
    }
}

console.log(dp[time])