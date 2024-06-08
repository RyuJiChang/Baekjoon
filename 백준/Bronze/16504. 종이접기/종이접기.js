const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

let sum = 0

for(let i = 1 ; i < input.length ; i++){
    for(let j = 0 ; j < input[i].length ; j++){
        sum += input[i][j]
    }
}
console.log(sum)