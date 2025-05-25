const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number).sort((a,b) => a - b)
let sum = 0

for(let i = 1 ; i < input.length - 1 ; i++){
    sum += input[i]
}

console.log(sum)