let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let sumNow = 0
let max = 0
for(let i = 0 ; i < input.length ; i++){
    let [a,b] = input[i].split(' ').map(Number)
    sumNow = sumNow - a + b
    max = Math.max(max,sumNow)
}

console.log(max)