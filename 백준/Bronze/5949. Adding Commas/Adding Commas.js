let input = require('fs').readFileSync('/dev/stdin').toString().trim()

let str = ''
let count = 0
for(let i = input.length-1 ; i >= 0 ; i--){
    str = input[i]+str
    count++
    if(count === 3 && i){
        count = 0
        str = ',' + str
    }
}
console.log(str)