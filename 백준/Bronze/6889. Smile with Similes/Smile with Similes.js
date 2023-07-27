const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const first = Number(input[0])

for(let i = 2 ; i < 2 + first ; i++){
    for(let j = 2 + first ; j < input.length ; j++){
        console.log(`${input[i]} as ${input[j]}`)
    }
}