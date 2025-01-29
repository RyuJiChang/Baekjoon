const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1]
const map = {'J' : 'O', 'O' : 'I', 'I' : 'J'}
let result = ''

for(let i = 0 ; i < input.length ; i++){
    result += map[input[i]]
}

console.log(result)