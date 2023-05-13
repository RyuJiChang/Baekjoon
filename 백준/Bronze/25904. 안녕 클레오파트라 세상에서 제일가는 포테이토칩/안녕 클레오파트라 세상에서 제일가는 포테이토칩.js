const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

let count = input[0][1]
let index = 0

while (count <= input[1][index]) {
    count++
    index = (index+1)%input[0][0]
}
console.log(index+1)