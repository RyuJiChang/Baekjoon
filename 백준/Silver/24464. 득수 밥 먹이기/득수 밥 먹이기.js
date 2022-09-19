let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let dp = [[1,1,1,1,1]]
let result = 0
for(let i = 1 ; i < input ; i++){
    dp.push(new Array(5).fill(0))
}
for(let i = 1 ; i < input ; i++){
    for(let j = 0 ; j < 5 ; j++){
        if(j === 0){
            dp[i][j] = (dp[i-1][1] + dp[i-1][2] + dp[i-1][3] + dp[i-1][4])%1000000007
        }
        else if(j === 1){
            dp[i][j] = (dp[i-1][0] + dp[i-1][3] + dp[i-1][4])%1000000007
        }
        else if(j === 2){
            dp[i][j] = (dp[i-1][0] + dp[i-1][4])%1000000007
        }
        else if(j === 3){
            dp[i][j] = (dp[i-1][0] + dp[i-1][1])%1000000007
        }
        else if(j === 4){
            dp[i][j] = (dp[i-1][0] + dp[i-1][1] + dp[i-1][2])%1000000007
        }
    }
}
for(let i = 0 ; i < 5 ; i++){
    result += dp[input-1][i]
}
console.log(result%1000000007)