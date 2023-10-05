const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    const [s, k, n] = input[i].split(' ').map(Number)
    result.push(`Case #${i}: ${Math.min(s+k, k + k - n + s - n )}`)
}

console.log(result.join('\n'))