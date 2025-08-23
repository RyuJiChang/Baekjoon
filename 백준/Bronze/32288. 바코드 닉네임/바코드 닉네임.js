const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1]
let str = ''

for(let i = 0 ; i < input.length ; i++){
    if(input[i] == 'I'){
        str += 'i'
    }
    else{
        str += 'L'
    }
}

console.log(str)