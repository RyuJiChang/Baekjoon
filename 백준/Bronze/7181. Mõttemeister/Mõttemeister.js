const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 2 ; i < input.length ; i++){
    let countA = 0
    let countB = 0
    for(let j = 0 ; j < 4 ; j++){
        if(input[0][j] == input[i][j]){
            countB++
        }
        for(let k = 0 ; k < 4 ; k++){
            if(input[i][j] == input[0][k]){
                countA++
                break
            }
        }
    }
    result.push(`${countA} ${countB}`)
}

console.log(result.join('\n'))