const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let sum = 0

for(let i = 1 ; i < input.length ; i++){
    sum += input[i]
}

const middle = sum / input[0]
let result = 0

for(let i = 1 ; i < input.length ; i++){
    if(input[i] > middle){
        result += input[i] - middle
    }
}

console.log(result)