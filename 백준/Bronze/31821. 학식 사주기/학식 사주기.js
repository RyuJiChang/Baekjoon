const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let sum = 0
for(let i = 2 + input[0] ; i < input.length ; i++){
    sum += input[input[i]]
}
console.log(sum)