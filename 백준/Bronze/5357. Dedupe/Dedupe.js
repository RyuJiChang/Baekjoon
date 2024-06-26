const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    let str = ''
    let strNow = ''
    for(let j = 0 ; j < input[i].length ; j++){
        if(strNow != input[i][j]){
            str += input[i][j]
            strNow = input[i][j]
        }
    }
    result.push(str)
}

console.log(result.join('\n'))