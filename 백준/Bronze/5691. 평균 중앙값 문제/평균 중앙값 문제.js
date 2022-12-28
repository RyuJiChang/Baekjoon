let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []
for(let i = 0 ; i < input.length -1 ; i++){
    let [a,b] = input[i].split(' ').map(Number)
    result.push(2*a-b)
}

console.log(result.join('\n'))