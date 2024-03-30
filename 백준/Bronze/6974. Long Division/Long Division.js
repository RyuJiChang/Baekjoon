const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(BigInt)
const results = []

for(let i = 1 ; i < input.length ; i+=2){
    const result = []
    result.push(String(input[i] / input[i+1]))
    result.push(String(input[i] % input[i+1]))
    results.push(result.join('\n'))
}

console.log(results.join('\n\n'))