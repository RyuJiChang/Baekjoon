let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []
for(let i = 1 ; i < input.length ; i++){
    let strs = []
    strs.push(`String #${i}`)
    let str = ''
    for(let j = 0 ; j < input[i].length ; j++){
        str += String.fromCharCode((input[i][j].charCodeAt()-64)%26 +65)
    }
    strs.push(str)
    result.push(strs.join('\n'))
}

console.log(result.join('\n\n'))