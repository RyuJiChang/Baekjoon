let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 0 ; i < input.length ; i++){
    if(i === 1){
        input[i] = Number(input[i])
    }
    else{
        input[i] = input[i].split(' ').map(Number)
    }
}

let dp = []
for(let i = 0 ; i < input[0][0] ; i++){
    dp.push(new Array(input[0][1]).fill(0))
}
let blocks = []
for(let i = 2 ; i < 2+input[1] ; i++){
    let [a, b] = input[i]
    blocks.push(`${a-1} ${b-1}`)
}
for(let i = 0 ; i < input[0][0] ; i++){
    for(let j = 0 ; j < input[0][1] ; j++){
        let str = `${i} ${j}`
        
        if(i === 0 && j === 0){
            dp[0][0] = 1
        }
        else if(blocks.indexOf(str) !== -1){
            continue
        }    
        else if(i === 0){
            dp[0][j] += dp[0][j-1]
        }
        else if(j === 0){
            dp[i][0] += dp[i-1][0]
        }
        else{
            dp[i][j] =  dp[i][j] + dp[i-1][j] + dp[i][j-1]
        }
    }
}

console.log(dp[input[0][0]-1][input[0][1]-1])