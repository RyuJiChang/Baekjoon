const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(',')
let result = 0
for(let i = 0 ; i < input.length ; i++){
    if(!input[i].indexOf('.') != -1){
        result++
    }
}

console.log(result)