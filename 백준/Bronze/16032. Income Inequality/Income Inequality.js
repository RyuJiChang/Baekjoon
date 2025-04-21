const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const result = []

for(let i = 1; i < input.length ; i+=2){
    let count = 0
    let total = 0
    for(let j = 0 ; j < input[i].length ; j++){
        count++
        total += input[i][j]
    }
    result.push(input[i].filter(el => el <= (total / count)).length)
}

console.log(result.join('\n'))