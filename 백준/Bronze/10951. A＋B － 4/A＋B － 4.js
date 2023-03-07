const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const result = []
for(i = 0 ; i < input.length ; i++){
    const [a, b] = input[i]
    result.push(a+b)
}
console.log(result.join('\n'))