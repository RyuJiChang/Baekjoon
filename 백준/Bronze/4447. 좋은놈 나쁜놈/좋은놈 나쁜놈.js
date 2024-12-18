const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    let g = 0
    let b = 0
    let goodBad = 'NEUTRAL'
    for(let j = 0 ; j < input[i].length ; j++){
        if(input[i][j] == 'b' || input[i][j] == 'B'){
            b++
        }
        else if(input[i][j] == 'g' || input[i][j] == 'G'){
            g++
        }
    }
    if(g > b){
        goodBad = 'GOOD'
    }
    if(b > g){
        goodBad = 'A BADDY'
    }

    result.push(`${input[i]} is ${goodBad}`)
}

console.log(result.join('\n'))