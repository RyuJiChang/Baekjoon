const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

let day = input[0]
let rc = input[1]
let dp = [0,0,1,1,2,3,5]

for(let i = 7 ; i<= day; i++){
    dp[i] = dp[i-1] + dp[i-2]
}


for(let i = 1 ; i <= input[1] ; i++){
    if((rc - (dp[day-1] * i))%dp[day] === 0){
        console.log(`${i}
${(rc - (dp[day-1] * i))/dp[day]}`)
        break
    }
}