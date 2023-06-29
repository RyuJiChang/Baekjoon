const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const sample = input[0].split(' ').map(Number)[0]
let result = 'Accepted'

for(let i = 1 ; i < input.length ; i++){
    const [a,b] = input[i].split(' ')
    if(a !== b && i <= sample){
        result = 'Wrong Answer'
        break
    }
    else if(a !== b){
        result = 'Why Wrong!!!'
        break
    }
}

console.log(result)