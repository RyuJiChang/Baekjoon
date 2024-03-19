const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const result = []

for(let i = 0 ; i < input.length ; i++){
    result.push(Math.round(Math.sqrt(input[i][0] * (input[i][1] + 0.16) / 0.067)))
}

console.log(result.join('\n'))