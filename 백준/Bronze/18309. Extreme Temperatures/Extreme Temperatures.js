const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let max = -10000
let min = 10000

for(let i = 0 ; i < input.length ; i++){
    const arr = input[i].split(' ').map(Number)
    arr.shift()
    for(let j = 0 ; j < arr.length ; j++){
        max = Math.max(max, arr[j])
        min = Math.min(min, arr[j])
    }
}
console.log(min, max)