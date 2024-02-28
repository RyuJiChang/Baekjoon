const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number).sort((a,b) => a-b))
const result = []

for(let i = 1 ; i < input.length ; i++){
    const [a, b, c] = input[i]
    result.push(`Case #${i}: ${(a**2 + b**2 == c**2) ? 'YES' : 'NO'}`)
}

console.log(result.join('\n'))