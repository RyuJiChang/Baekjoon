let [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let count = 2
while(a >= b){
    let temp = b
    b = a - b 
    a = temp
    count++
}

console.log(count)