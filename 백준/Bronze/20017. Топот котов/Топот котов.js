const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [x, y, p] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)
let count = 0

for(let i = y ; i < x*y ; i += y){
    for(let j = i ; j < i + y ; j++){
        if(arr[j] > arr[j-y] * 2){
            count++
        }
    }
}

console.log(count * p)