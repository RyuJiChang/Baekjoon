const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
input.pop()

let num = 480
let dp = [1n, 2n]
let result = []

for(let i = 2 ; i <= num ; i++ ){
    dp[i] = dp[i-1] + dp[i-2]
}

for(let i = 0 ; i < input.length ; i++){
    let [a,b] = input[i].split(' ').map(BigInt)
    let count = 0
    let now = 0
    while(dp[now] <= b){
        if(a <= dp[now]){
            count++
        }
        now++
    }
    result.push(count)
    count = 0
    now = 0    
}
console.log(result.join('\n'))

