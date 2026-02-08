const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const points = []
const sums = []

for(let i = 1 ; i < input.length ; i++){
    let sum = 0
    for(let j = 1 ; j < input[i].length ; j++){
        points.push(input[i][j])
        sum += input[i][j]
    }
    sums.push(sum)
}

console.log(Math.max(...points))
console.log(Math.min(...points))
console.log(Math.max(...sums))
console.log(Math.min(...sums))