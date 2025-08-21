const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const str = 'SciComLove'
let result = 0

for(let i = 0 ; i < 10 ; i++){
    if(input[i] != str[i]){
        result++
    }
}

console.log(result)