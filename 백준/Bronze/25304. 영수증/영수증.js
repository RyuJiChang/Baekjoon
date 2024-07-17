const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let sum = 0

for(let i = 2 ; i < input.length ; i++){
    const [price, quantity] = input[i].split(' ')
    sum += price * quantity
}

console.log(input[0] == sum ? 'Yes' : 'No')