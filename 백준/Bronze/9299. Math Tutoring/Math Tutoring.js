const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const result = []

for(let i = 1 ; i < input.length ; i++){
    let nums = input[i][0]
    let cases = 'Case ' + i + ': ' + (nums - 1)
    for(let j = 1 ; j < input[i].length -1 ; j++){
        cases += ' ' + input[i][j] * nums-- 
    }
    result.push(cases)
}

console.log(result.join('\n'))