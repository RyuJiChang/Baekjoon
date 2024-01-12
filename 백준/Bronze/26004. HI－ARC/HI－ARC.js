const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const hiarcMap = {H:0, I:0, A:0, R:0, C:0}

for(let i = 0 ; i < input[1].length ; i++){
    hiarcMap[input[1][i]]++
}

console.log(Math.min(hiarcMap['H'], hiarcMap['I'], hiarcMap['A'], hiarcMap['R'], hiarcMap['C']))