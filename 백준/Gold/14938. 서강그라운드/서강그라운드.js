const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const vertex = input[0][0]
const limit = input[0][1]
const matrix = []
let result = 0
for(let i = 0 ; i < vertex ; i++){
    matrix.push(new Array(vertex).fill(100))
    matrix[i][i] = 0
}

for(let i = 2 ; i < input.length ; i++){
    const [start, end, length] = input[i]
    matrix[start-1][end-1] = length
    matrix[end-1][start-1] = length
}

for(let i = 0 ; i < vertex ; i++){
    for(let j = 0 ; j < vertex ; j++){
        for(let k = 0 ; k < vertex ; k++){
            matrix[j][k] = Math.min(matrix[j][k], matrix[j][i] + matrix[i][k])
        }
    }
}
for(let i = 0 ; i < matrix.length ; i++){
    let sum = 0
    for(let j = 0 ; j < matrix[i].length ; j++){
        if(matrix[i][j] <= limit){
            sum += input[1][j]
        }
    }
    result = Math.max(result, sum)
}

console.log(result)