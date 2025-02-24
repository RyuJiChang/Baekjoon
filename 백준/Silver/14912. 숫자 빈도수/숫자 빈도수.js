const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
let count = 0

for(let i = 1 ; i <= input[0] ; i++){
    count += String(i).split('').filter(el => el == input[1]).length
}

console.log(count)