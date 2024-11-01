const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    const num = Number(input[i])
    for(let j = 1 ; j <= num ; j++){
        const [a,b] = input[i+j].split(' ').map(Number)
        result.push(`${a+b} ${a*b}`)
    }
    i += num
}

console.log(result.join('\n'))