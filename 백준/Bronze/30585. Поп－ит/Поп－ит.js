const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let one = 0
let zero = 0

for(let i = 1 ; i < input.length ; i++){
    for(let j = 0 ; j < input[i].length ; j++){
        if(input[i][j] == '1'){
            one++
        }
        else{
            zero++
        }
    }
}

console.log(Math.min(one, zero))