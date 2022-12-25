let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []

for(let i = 1 ; i < input.length ; i++){
    let [a,b] = input[i].split(' ').map(Number)
    result.push(`You get ${Math.floor(a/b)} piece(s) and your dad gets ${a%b} piece(s).`)
}

console.log(result.join('\n'))