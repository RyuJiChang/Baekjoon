let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1)

let result = []

for(let i = 0 ; i < input.length ; i++){
    let [a,b] = input[i].split(' ').map(Number)
    result.push(2+b-a)
}

console.log(result.join('\n'))