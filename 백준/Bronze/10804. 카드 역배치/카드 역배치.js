const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let result = []

for(let i = 1 ; i <= 20 ; i++){
    result.push(i)
}

for(let i = 0 ; i < input.length ; i++){
    const [x,y] = input[i]
    result = [...result.slice(0,x-1), ...result.slice(x-1, y).reverse(), ...result.slice(y)]
}
console.log(result.join(' '))