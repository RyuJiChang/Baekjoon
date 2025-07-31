const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const result = []

for(let i = 1 ; i < input.length ; i++){
    result.push(('++++ '.repeat(Math.floor(input[i] / 5)) + '|'.repeat(input[i]%5)).trim())    
}

console.log(result.join('\n'))