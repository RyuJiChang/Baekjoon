const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
const checklist = ['i', 'pa', 'te', 'ni', 'niti', 'a', 'ali', 'nego', 'no', 'ili']
let result = input[0][0]
    
for(let i = 1 ; i < input.length ; i++){
    const str = input[i]
    result += checklist.indexOf(str) == -1 ? str[0] : ''
}

console.log(result.toUpperCase())