const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const result = []

for(let i = 1 ; i < input.length ; i+=2){
    const [x, y] = input[i]
    const [a, b] = input[i+1]
    result.push(((x / y) < (a**2 * Math.PI / b)) ? 'Whole pizza' : 'Slice of pizza')
}
console.log(result.join('\n'))