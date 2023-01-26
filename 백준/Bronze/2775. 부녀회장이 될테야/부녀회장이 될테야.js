let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let dp = [new Array(14).fill(1)]
for(let i = 0 ; i < 15 ; i++){
    let newFloor = [1]
    for(let j = 0 ; j < 13 ; j++){
        newFloor.push(dp[i][j+1] + newFloor[j])
    }
    dp.push(newFloor)
}

for(let i = 1 ; i < input.length ; i+=2){
    console.log(dp[input[i]+1][input[i+1]-1])
}