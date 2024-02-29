const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []
for(let i = 1 ; i < input.length ; i++){
    result.push((Number(input[i].slice(0,2))**2 + Number(input[i].slice(2))**2) % 7 == 1 ? 'YES' : 'NO')
}

console.log(result.join('\n'))