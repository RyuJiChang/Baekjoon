const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

const result = []

for(let i = 1 ; i < input.length ; i++){
    let sum = 0
    for(let j = 1 ; j <= input[i] ; j++){
        sum += (j*(j+1)*(j+2))/2
    }
    result.push(sum)
}


console.log(result.join('\n'))