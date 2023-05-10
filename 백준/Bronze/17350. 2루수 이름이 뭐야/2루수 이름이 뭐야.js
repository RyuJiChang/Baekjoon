const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = '뭐야?'

for(let i = 1 ; i < input.length ; i++){
    if(input[i] === 'anj'){
        result = '뭐야;'
    }
}

console.log(result)