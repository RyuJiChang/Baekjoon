const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

for(let i = 1 ; i < input.length ; i++){
    const [index, length, speedA, speedB, speedF] = input[i].split(' ').map(Number)
    result.push(`${index} ${length / (speedA + speedB) * speedF}`)
}

console.log(result.join('\n'))