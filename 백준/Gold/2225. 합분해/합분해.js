let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

let dp = []
for(let i = 0 ; i < input[1] ; i++){
    dp.push(new Array(input[0]+1).fill(1))
}
for(let i = 1 ; i < input[1] ; i++){
    for(let j = 0 ; j <= input[0] ; j++){
        let a = 0
        for(let k = 0 ; k <= j ; k++){
            a = (a + dp[i-1][k])%1000000000
        }
        dp[i][j] = a
    }
}
console.log(dp[input[1]-1][input[0]])