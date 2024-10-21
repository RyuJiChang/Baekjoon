const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i+=2){
    let count = 0
    for(let j = 0 ; j < input[i].length ; j++){
        if(input[i][j] != input[i+1][j]){
            count++
        }
    }
    result.push(`Hamming distance is ${count}.`)
}

console.log(result.join('\n'))