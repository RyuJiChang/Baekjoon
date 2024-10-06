const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let result = 0

for(let i = 0 ; i < input[1].length ; i++){
    result += input[1][i]
}

for(let i = 0 ; i < input[2].length ; i++){
    result -= input[2][i]
}

console.log(result)