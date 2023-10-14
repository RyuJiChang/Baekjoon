const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const [milk, honey] = input[0]
let happy = 0

for(let i = 2 ; i < input.length ; i++){
    const [cow, bee] = input[i]
    happy += Math.max(cow * milk , honey * bee)
}

console.log(happy)