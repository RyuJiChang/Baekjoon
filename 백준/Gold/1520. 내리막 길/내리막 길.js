let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let arr = []
let [x, y] = input[0].split(' ').map(Number)
let matrix = input.slice(1)
let sum = 0
for(let i = 0 ; i < x ; i++){
    arr.push(new Array(y).fill(-1))
    matrix[i] = matrix[i].split(' ').map(Number)
}
arr[x-1][y-1] = 1

function recurtion(a,b) {
    if(arr[a][b] !== -1){
        return arr[a][b]
    }
    let sum = 0
    if(matrix[a+1] && matrix[a+1][b] >= 0 && matrix[a][b] > matrix[a+1][b]){
        sum += recurtion(a+1,b)
    }
    if(matrix[a][b+1] >= 0 && matrix[a][b] > matrix[a][b+1]){
        sum += recurtion(a,b+1)
    }
    if(matrix[a-1] && matrix[a-1][b] >= 0 && matrix[a][b] > matrix[a-1][b]){
        sum += recurtion(a-1,b)
    }
    if(matrix[a] && matrix[a][b-1] >= 0 && matrix[a][b] > matrix[a][b-1]){
        sum += recurtion(a,b-1)
    }
    arr[a][b] = sum
    return sum
}

console.log(recurtion(0,0))