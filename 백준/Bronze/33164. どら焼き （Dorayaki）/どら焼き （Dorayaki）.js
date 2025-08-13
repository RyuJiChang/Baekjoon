const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

let sum = 0

for(let i = 0 ; i < input[1].length ; i++){
    for(let j = 0 ; j < input[2].length ; j++){
        sum += Math.max(input[1][i], input[2][j]) * (input[1][i]+input[2][j])
    }
}

console.log(sum)