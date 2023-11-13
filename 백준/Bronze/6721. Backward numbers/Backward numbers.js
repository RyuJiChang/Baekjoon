const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    let [x, y] = input[i].split(' ').map(el => el.split('').reverse().join(''))
    let sum = String(Number(x) + Number(y)).split('').reverse().join('')
    result.push(Number(sum))
}

console.log(result.join('\n'))