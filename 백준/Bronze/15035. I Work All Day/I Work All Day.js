const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const height = Number(input[2])
const arr = input[1].split(' ').map(Number)
let min = 3000
let now = arr[0]

for(let i = 0 ; i < arr.length ; i++){
    const check = height % arr[i]
    if(check < min){
        min = check
        now = arr[i]
    }
}

console.log(now)