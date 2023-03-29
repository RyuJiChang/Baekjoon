const input = require('fs').readFileSync('/dev/stdin').toString().trim()

const gather = {'a':1, 'e':1, 'i':1, 'o':1, 'u':1}
let count = 0

for(let i = 0 ; i < input.length ; i++){
    if(gather[input[i]]){
        count++
    }
}

console.log(count)