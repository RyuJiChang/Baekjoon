const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const limit = input[1]
const result = []

for(let i = 1 ; i <= input[0] ; i++){
    if(i % 10 == limit % 10 || i % 10 == (limit * 2) % 10){
        continue
    }
    else{
        result.push(i)
    }
}

console.log(result.length)
console.log(result.join(' '))

