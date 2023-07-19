const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []
for(let i = 1 ; i < input.length ; i++){
    result.push(`Case #${i}: ${Math.max(...input[i].split(' ').map(Number))}`)
}

console.log(result.join('\n'))