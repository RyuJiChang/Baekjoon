const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const result = []

for(let i = 0 ; i < input.length ; i++){
    for(let j = 0 ; j < input[i] ; j++){
        if(j === input[i]-1){
            result.push(' '.repeat(j) + '*')
        }
        else{
            result.push(' '.repeat(j) + '*' + ' '.repeat((input[i] - j) * 2 - 3 ) + '*')
        }
    }
}

console.log(result.join('\n'))