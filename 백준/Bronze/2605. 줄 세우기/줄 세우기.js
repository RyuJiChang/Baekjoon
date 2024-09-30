const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)

const arr = [1]

for(let i = 1 ; i < input.length ; i++){
    arr.splice(i - input[i], 0, i+1)
}

console.log(arr.join(' '))