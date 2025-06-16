const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const arr = new Array(10001).fill(0)
let now = 1
for(let i = 1 ; now <= 10000 ; i++){
    for(let j = 1 ; j <= i ; j++){
        for(let k = now ; k <= 10000 ; k++){
            arr[k] += i
        }
        now++
    }
}

for(let i = 0 ; i < input.length - 1 ; i++){
    console.log(`${input[i]} ${arr[input[i]]}`)
}