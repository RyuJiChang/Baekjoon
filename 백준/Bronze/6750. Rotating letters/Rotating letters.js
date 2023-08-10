const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const obj = { I : 1, O : 1, S : 1, H : 1, Z : 1, X : 1, N : 1}
let result = 'YES'
for(let i = 0 ; i < input.length ; i++){
    if(obj[input[i]] != 1){
        result = 'NO'
        break
    }
}
console.log(result)