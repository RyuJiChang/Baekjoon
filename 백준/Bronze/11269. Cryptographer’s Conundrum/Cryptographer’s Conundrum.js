const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const str = 'PER'
let count = 0
for(let i = 0 ;i < input.length ; i++){
    if(input[i] != str[i % 3]){
        count++
    }
}

console.log(count)