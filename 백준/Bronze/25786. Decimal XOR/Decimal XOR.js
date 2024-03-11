let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
input = input.map(el => el.padStart(Math.max(input[0].length, input[1].length),'0'))
let str = ''
for(let i = 0 ; i < input[0].length ; i++){
    if((input[0][i] <= 2 && input[1][i] <= 2) || (input[0][i] >= 7 && input[1][i] >= 7)){
       str += '0'
   }
    else{
        str += '9'
    }
}

console.log(str)