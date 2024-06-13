const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    result.push(input[i].length > 5 && input[i].length <10 ? 'yes' : 'no')
}

console.log(result.join('\n'))