const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const term = Number(input[0])
let str = ''

for(let i = 0 ; i < input[1].length ; i++){
    if(i % term === 0){
        str += input[1][i]
    }
}

console.log(str)

