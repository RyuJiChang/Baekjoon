const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    const [start, end] = input[i].split(' ').map(BigInt)
    const data = []
    data.push('Scenario #' + i + ':')
    data.push((end - start + 1n)*(end + start)/2n)
    result.push(data.join('\n'))
}

console.log(result.join('\n\n'))