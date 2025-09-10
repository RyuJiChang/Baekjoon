const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let str = ''

for(let i = 0 ; i < input[1].length ; i++){
    if(input[0].indexOf(input[1][i]) == -1){
        str += input[1][i]
    }
}

console.log(str)