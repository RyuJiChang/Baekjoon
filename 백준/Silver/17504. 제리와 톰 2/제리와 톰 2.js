const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(BigInt).reverse()
let x = 1n
let y = input[0]

for(let i = 1 ; i < input.length ; i++){
    let next = input[i]
    let temp = y
    y = x + temp * next
    x = temp
}

console.log(String(y - x), String(y))