const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let result = 0
const noteObj = {0 : 2, 1 : 1, 2 : 0.5, 4 : 0.25, 8 : 0.125, 16 : 0.0625}

for(let i = 0 ; i < input[1].length ; i++){
    result += noteObj[input[1][i]]
}

console.log(result)