const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

for(let i = 1 ; i < input.length ; i++){
    const[num, str] = input[i].split(' ')
    result.push(str.repeat(Number(num)))
}

console.log(result.join('\n'))