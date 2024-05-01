const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let result = 'ESCAPE FAILED'

for(let i = 0 ; i < input[1].length ; i++){
    let check = false
    for(let j = 1 ; j < input.length ; j++){
        if(input[j][i] == 'O'){
            check = true
            break
        }
    }
    if(!check){
        result = i + 1
        break
    }
}

console.log(result)