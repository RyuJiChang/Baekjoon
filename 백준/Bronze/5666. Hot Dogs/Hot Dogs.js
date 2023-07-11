const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

for(let i = 0 ; i < input.length ; i++){
    const [hotdogs, participants] = input[i].split(' ').map(Number)
    result.push((hotdogs/participants).toFixed(2))
}

console.log(result.join('\n'))