const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const limit = input[1] % 10
const result = []

for(let i = 1 ; i <= input[0] ; i++){
    if(i % 10 == limit || i % 10 == limit * 2){
        continue
    }
    else{
        result.push(i)
    }
}

console.log(result.length)
console.log(result.join(' '))
