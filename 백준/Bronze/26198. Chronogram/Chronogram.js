const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const point = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000}
const result = []
for(let i = 1 ; i < input.length ; i++){
    let sum = 0
    for(let j = 0 ; j < input[i].length ; j++){
        if(point[input[i][j]]){
            sum += point[input[i][j]]
        }
    }
    result.push(sum)
}

console.log(result.join('\n'))