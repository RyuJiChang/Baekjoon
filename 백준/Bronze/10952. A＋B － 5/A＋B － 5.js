const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []
for(let i = 0 ; i < input.length-1 ; i++){
    const [a,b] = input[i].split(' ').map(Number)
    result.push(a+b)
}

console.log(result.join('\n'))