const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const range = input[0][1]
const x = input[0][2]
const y = input[0][3]
let sum = 0
for(let i = 1 ; i < input.length ; i++){
    if((x-input[i][0])**2 + (y-input[i][1])**2 > range**2){
        sum++
    }
}
console.log(sum)