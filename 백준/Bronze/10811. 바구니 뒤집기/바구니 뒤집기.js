const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let arr = []

for(let i = 1 ; i <= input[0][0] ; i++){
    arr.push(i)
}

for(let i = 1 ; i < input.length ; i++){
    const newArr = []
    const [start, end] = input[i]
    arr = [...arr.slice(0, start-1), ...arr.slice(start-1, end).reverse(), ...arr.slice(end)]
}
console.log(arr.join(' '))