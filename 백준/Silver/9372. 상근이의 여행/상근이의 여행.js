let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []

for(let i = 1 ; i < input.length ; i++){
    let [a,b] = input[i].split(' ').map(Number)
    result.push(a-1)
    i += b
}

console.log(result.join('\n'))