let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(BigInt)

let result = []

for(let i = 1 ; i < input.length ; i++){
    if(input[i]%2n) result.push('odd')
    else result.push('even')
}

console.log(result.join('\n'))