const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [pointA, pointB, pointC] = input[0].split(' ').map(Number)
let max = 0

for(let i = 2 ; i < input.length ; i += 3){
    const [a1,b1,c1] = input[i].split(' ').map(Number)
    const [a2,b2,c2] = input[i+1].split(' ').map(Number)
    const [a3,b3,c3] = input[i+2].split(' ').map(Number)
    let sum = (a1+a2+a3)*pointA + (b1+b2+b3)*pointB + (c1+c2+c3)*pointC
    max = Math.max(max, sum)
}

console.log(max)