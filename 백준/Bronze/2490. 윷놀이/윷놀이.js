let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []
for(let i = 0 ; i < input.length ; i++){
    result.push('DCBAE'[input[i].split(' ').filter(el => el === '1').length])
}

console.log(result.join('\n'))