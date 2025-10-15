const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 0 ; i < input.length ; i++){
    let str = ''
    for(let j = 0 ; j < input[i].length ; j++){
        if(input[i][j] === 'i'){
            str += 'e'
        }
        else if(input[i][j] === 'I'){
            str += 'E'
        }
        else if(input[i][j] === 'e'){
            str += 'i'
        }
        else if(input[i][j] === 'E'){
            str += 'I'
        }
        else{
            str += input[i][j]
        }
    }
    result.push(str)
}

console.log(result.join('\n'))