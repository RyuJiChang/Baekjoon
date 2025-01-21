const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number)).sort((a,b) => a[0] - b[0])
let result = 0
let sum = 0
for(let i = 0 ; i < input.length ; i++){
    const [a, b] = input[i]
    sum += a
    result += sum + b * 20
}

console.log(result)