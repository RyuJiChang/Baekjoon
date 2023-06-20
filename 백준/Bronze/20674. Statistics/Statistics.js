const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let min = input[1]
let sum = 0

for(let i = 1 ; i < input.length ; i++){
    if(input[i] > min){
        sum += input[i] - min
    }
    else{
        min = input[i]
    }
}

console.log(sum)