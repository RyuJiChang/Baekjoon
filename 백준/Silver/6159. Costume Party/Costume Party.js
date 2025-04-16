const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [x, y] = input.shift().split(' ').map(Number)
const arr = input.map(Number)
let count = 0

for(let i = 0 ; i < x ; i++){
    for(let j = i + 1 ; j < x ; j++){
        if(arr[i] + arr[j] <= y){
            count++
        }
    }
}

console.log(count)