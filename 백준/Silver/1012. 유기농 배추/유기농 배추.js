const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

const earthwormChecker = (x, y, matrix) => {
    stack = [[x, y]]
    while (stack.length) {
        const [x,y] = stack.pop()
        matrix[x][y] = 0
        if(matrix[x][y-1]){
            matrix[x][y-1] = 0
            stack.push([x,y-1])
        }
        if(matrix[x][y+1]){
            matrix[x][y+1] = 0
            stack.push([x,y+1])
        }
        if(matrix[x-1] && matrix[x-1][y]){
            matrix[x-1][y] = 0
            stack.push([x-1,y])
        }
        if(matrix[x+1] && matrix[x+1][y]){
            matrix[x+1][y] = 0
            stack.push([x+1,y])
        }
    }
}

for(let i = 1 ; i < input.length ; i++){
    const [xLength, yLength, iAdded] = input[i].split(' ').map(Number)
    const matrix = []
    let count = 0
    
    for(let j = 0 ; j < xLength ; j++){
        matrix.push(new Array(yLength).fill(0))
    }
    for(let j = i+1 ; j <= i+iAdded ; j++){
        const [x, y] = input[j].split(' ').map(Number)
        matrix[x][y] = 1
    }
    i+=iAdded
    for(let j = 0 ; j < xLength ; j++){
        for(let k = 0 ; k < yLength ; k++){
            if(matrix[j][k]){
                count++
                earthwormChecker(j,k,matrix)
            }
        }
    }
    result.push(count)
}

console.log(result.join('\n'))
