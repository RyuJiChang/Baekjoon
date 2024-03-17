const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const resultArr = ['A', 'B', 'C', 'B', 'C', 'D', 'C', 'D', 'A', 'D', 'A', 'B', 'A']

for(let i = 1 ; i < input.length ; i++){
    console.log(resultArr[(input[i] - 1) % 12])
}