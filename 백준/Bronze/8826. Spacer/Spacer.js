const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []
for(let i = 2 ; i < input.length ; i+=2){
    let obj = {E : 0, S : 0, W : 0, N : 0}
    for(let j = 0 ; j < input[i].length ; j++){
            obj[input[i][j]]++
    }
    result.push(Math.max(obj['N'] - obj['S'] , obj['S'] - obj['N']) + Math.max(obj['W'] - obj['E'] , obj['E'] - obj['W']))
}
console.log(result.join('\n'))