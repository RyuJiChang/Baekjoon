const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 0 ; i < input.length ; i++){
    let before = ''
    let index = 0
    let maxIndex = 0
    for(let j = 0 ; j < input[i].length ; j++){
        if(before == input[i][j]){
            index++
            maxIndex = Math.max(maxIndex, index)
        }
        else{
            index = 1
            before = input[i][j]
            maxIndex = Math.max(maxIndex, index)
        }
    }
    result.push(maxIndex)
}

console.log(result.join('\n'))