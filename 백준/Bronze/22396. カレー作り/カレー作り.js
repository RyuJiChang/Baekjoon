const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 0 ; i < input.length-1 ; i++){
    const [a,b,c,d] = input[i].split(' ').map(Number)
    result.push(Math.max(0,Math.ceil((b*c -a)/d)))
}

console.log(result.join('\n'))

