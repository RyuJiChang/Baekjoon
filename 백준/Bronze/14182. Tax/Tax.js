const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const result = []

for(let i = 0 ; i < input.length - 1 ; i++){
    if(input[i] <= 1000000){
        result.push(input[i])
    }
    else if(input[i] <= 5000000){
        result.push(input[i] * 0.9)
    }
    else{
        result.push(input[i] * 0.8)
    }
}

console.log(result.join('\n'))