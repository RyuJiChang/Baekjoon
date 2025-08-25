const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')


for(let i = 1 ; i < input.length ; i++){
    const [x,y] = input[i].split(' ').map(Number)
    console.log(input[i])
    console.log(x * (y - 2) + 2)
}