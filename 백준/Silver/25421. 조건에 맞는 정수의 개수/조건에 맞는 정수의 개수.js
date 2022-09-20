let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let dp = [[1,1,1,1,1,1,1,1,1]]
let result = 0

for(let i = 0 ; i < input-1 ; i++){
    dp.push(new Array(9).fill(0))
}

for(let i = 1 ; i < input ; i++){
    for(let j = 0 ; j < 9 ; j++){
        if(j === 0){
            dp[i][j] = (dp[i-1][j] + dp[i-1][j+1] + dp[i-1][j+2]) % 987654321
        }
        else if(j === 1){
            dp[i][j] = (dp[i-1][j-1] + dp[i-1][j] + dp[i-1][j+1] + dp[i-1][j+2]) % 987654321
        }
        else if(j === 2){
            dp[i][j] = (dp[i-1][j-2] + dp[i-1][j-1] + dp[i-1][j] + dp[i-1][j+1] + dp[i-1][j+2]) % 987654321
        }
        else if(j === 3){
            dp[i][j] = (dp[i-1][j-2] + dp[i-1][j-1] + dp[i-1][j] + dp[i-1][j+1] + dp[i-1][j+2]) % 987654321
        }
        else if(j === 4){
            dp[i][j] = (dp[i-1][j-2] + dp[i-1][j-1] + dp[i-1][j] + dp[i-1][j+1] + dp[i-1][j+2]) % 987654321
        }
        else if(j === 5){
            dp[i][j] = (dp[i-1][j-2] + dp[i-1][j-1] + dp[i-1][j] + dp[i-1][j+1] + dp[i-1][j+2]) % 987654321
        }
        else if(j === 6){
            dp[i][j] = (dp[i-1][j-2] + dp[i-1][j-1] + dp[i-1][j] + dp[i-1][j+1] + dp[i-1][j+2]) % 987654321
        }
        else if(j === 7){
            dp[i][j] = (dp[i-1][j-2] + dp[i-1][j-1] + dp[i-1][j] + dp[i-1][j+1]) % 987654321
        }
        else if(j === 8){
            dp[i][j] = (dp[i-1][j-2] + dp[i-1][j-1] + dp[i-1][j]) % 987654321
        }
    }
}
for(let i = 0 ; i < 9 ; i++){
    result = (result + dp[input-1][i]) % 987654321
}
console.log(result)
