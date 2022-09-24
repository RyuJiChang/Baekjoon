let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let answer = []
for(let i = 2 ; i < input.length ; i += 3){
    let dp = new Array(Number(input[i+1])+1).fill(0)
    dp[0] = 1
    let arrs = input[i].split(' ').map(Number)
    for(let j = 0 ; j < arrs.length ; j++){
        for(let k = 1 ; k <= Number(input[i+1]) ; k++){
            if(k >= arrs[j]){
                dp[k] += dp[k-arrs[j]]
            }
        }
    }
    
    answer.push(dp[Number(input[i+1])])
}

console.log(answer.join('\n'))