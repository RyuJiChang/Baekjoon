let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 0 ; i < input.length ; i++){
    input[i] = input[i].split(' ').map(Number).reduce((a,b) => a+b)
}

console.log(input.indexOf(Math.max(...input))+1, Math.max(...input))