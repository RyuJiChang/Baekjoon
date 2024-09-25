const input = require('fs').readFileSync('/dev/stdin').toString().trim()
let result = 'YES'

for(let i = 0 ; i < 3 ; i++){
    if(input[i] != 5){
        result = 'NO'
    }
}

console.log(result)