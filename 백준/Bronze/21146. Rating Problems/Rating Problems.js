const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [n, k] = input[0].split(' ').map(Number)
let point = 0

for(let i = 1 ; i < input.length ; i++){
    point += Number(input[i])
}

const max = (point + 3 * (n - k)) / n
const min = (point - 3 * (n - k)) / n

console.log(min, max)