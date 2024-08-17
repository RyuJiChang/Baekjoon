const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
input.push(input[1])

const arr = input.slice(1).map(el => el.split(' ').map(Number))
let sum = 0

for(let i = 0 ; i < arr.length-1 ; i++){
    sum = sum + arr[i][0] * arr[i+1][1] - arr[i][1] * arr[i+1][0]
}

console.log((Math.floor(Math.abs(sum / 2 * 10))/10).toFixed(1))