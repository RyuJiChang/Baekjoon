const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' '))
const result = []

for(let i = 1 ; i < input.length ; i++){
    result.push(input[i][0].slice(0,input[i][1]) + input[i][0].slice(input[i][2]))
}

console.log(result.join('\n'))