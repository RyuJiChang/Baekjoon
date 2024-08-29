const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
let count = 0

for(let i = 0 ; i < input.length ; i++){
    count += input[i]
}

console.log(count * 5)