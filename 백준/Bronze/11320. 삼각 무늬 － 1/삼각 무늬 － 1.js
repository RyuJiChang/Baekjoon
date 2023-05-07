const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

for(let i = 1 ; i < input.length ; i++){
    const [a,b] = input[i].split(' ').map(Number)
    result.push((a/b)**2)
}

console.log(result.join('\n'))