const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 0 ; i < input.length ; i++){
    input[i] = input[i].split(' ').map(Number)
}
let size = input[0][0]
let dp = [...input.slice(1, 1 +size)]
let xys = [...input.slice(1 +size)]
let result = []

for(let i = 0 ; i < size ; i++){
    for(let j = 0 ; j < size ; j++){
        if(i > 0 && j > 0){
            dp[i][j] = dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1] + dp[i][j]
        }
        else if( j > 0 && i === 0){
            dp[i][j] += dp[i][j-1]
        }
        else if ( j === 0 && i > 0){
            dp[i][j] += dp[i-1][j]
        }
        else{
            continue
        }
    }
}

for(let i = 0 ; i < xys.length ; i++){
    let [a,b,c,d] = xys[i]
    if(a === 1 && b === 1){
        result.push(dp[c-1][d-1])
    }
    else if(a === 1 && b > 1){
        result.push(dp[c-1][d-1] - dp[c-1][b-2])
    }
    else if(b === 1 && a > 1){
        result.push(dp[c-1][d-1] - dp[a-2][d-1])
    }
    else{
        result.push(dp[c-1][d-1] - dp[a-2][d-1] - dp[c-1][b-2] + dp[a-2][b-2])
    }
}
console.log(result.join('\n'))
