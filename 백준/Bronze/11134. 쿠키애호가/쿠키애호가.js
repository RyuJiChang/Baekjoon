const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []
for(let i = 1 ; i < input.length ; i++){
    const [a, b] = input[i].split(' ').map(Number)
    result.push(Math.ceil(a/b))
}

console.log(result.join('\n'))