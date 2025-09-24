const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const str = 'UAPC'
let result = ''

for(let i = 0 ; i < 4 ; i++){
    if(input.indexOf(str[i]) == -1){
        result += str[i]
    }
}

console.log(result)