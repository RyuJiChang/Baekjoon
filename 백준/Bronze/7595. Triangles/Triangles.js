const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

const result = []
for(let i = 0 ; i < input.length-1 ; i++){
    for(let j = 1 ; j <= input[i] ; j++){
        result.push('*'.repeat(j))
    }
}

console.log(result.join('\n'))