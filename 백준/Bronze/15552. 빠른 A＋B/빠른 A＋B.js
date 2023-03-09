const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let b, c
let result = ''
for(i = 1 ; i < input.length ; i++){
     b = input[i].split(' ')
     c = String(Number(b[0]) + Number(b[1]))
    if(i === input.length){
        result += c
    }
    else{
        result += c + '\n'
    }
}
console.log(result)