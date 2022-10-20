let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let sum = 1
for(let i = 1 ; i < input.length ; i++){
    sum = sum -1 + input[i]
}
console.log(sum)