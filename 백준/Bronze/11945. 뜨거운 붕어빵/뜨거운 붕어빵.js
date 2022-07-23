const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let result = []
for(let i = 1 ; i < input.length ; i++){
    input[i] = input[i].split('').map(Number).reverse().join('')
    result.push(input[i])
}

console.log(result.join('\n'))
