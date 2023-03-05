const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

const vertex = input[0][0]
const matrix = []
const result = []
for(let i = 0 ; i < vertex ; i++){
    matrix.push(new Array(vertex).fill(100))
    matrix[i][i] = 0
}

for(let i = 1 ; i < input.length ; i++){
    const [start, end] = input[i]
    matrix[start-1][end-1] = 1
    matrix[end-1][start-1] = 1
}

for(let i = 0 ; i < vertex ; i++){
    for(let j = 0 ; j < vertex ; j++){
        for(let k = 0 ; k < vertex ; k++){
            matrix[j][k] = Math.min(matrix[j][k], matrix[j][i] + matrix[i][k])
        }
    }
}

for(let i = 0 ; i < vertex ; i++){
    let lowSum = 0
    for(let j = 0 ; j < vertex ; j++){
        lowSum += matrix[i][j]
    }
    result.push([lowSum, i+1])
}

console.log(result.sort((a,b) => a[0]-b[0])[0][1])