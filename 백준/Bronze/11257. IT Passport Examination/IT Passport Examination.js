const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const result = []

for(let i = 1 ; i < input.length ; i++){
    const [nums, a, b, c] = input[i]
    const sum = a + b + c
    const isPass = (sum >= 55) && (a / 35 >= 0.3) && (b / 25 >= 0.3) && (c / 40 >= 0.3)
    result.push(`${nums} ${sum} ${isPass ? 'PASS' : 'FAIL'}`)
}

console.log(result.join('\n'))