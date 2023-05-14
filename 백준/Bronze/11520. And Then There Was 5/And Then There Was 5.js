const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

for(let i = 1 ; i < input.length ; i++){
    const nums = input[i].split(' ').map(Number)[1]
    result.push(`${nums} 5`)
}

console.log(result.join('\n'))