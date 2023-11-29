const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)
const result = []
let point = 100
for(let i = 0 ; i < input.length ; i++){
    point *= (100 - input[i]) /100 
    result.push(100-point)
}

console.log(result.join('\n'))