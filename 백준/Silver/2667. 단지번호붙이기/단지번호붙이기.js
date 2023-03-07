const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const length = Number(input[0])
const matrix = input.slice(1).map(el => el.split('').map(Number))
const result = []

const dfs = (x,y) => {
    let count = 1
    const stack = [[x,y]]
    matrix[x][y] = 0
    while (stack.length) {
        const [xNow, yNow] = stack.pop()
        if(matrix[xNow+1] && matrix[xNow+1][yNow]){
            count++
            matrix[xNow+1][yNow] = 0
            stack.push([xNow+1,yNow])
        }
        if(matrix[xNow-1] && matrix[xNow-1][yNow]){
            count++
            matrix[xNow-1][yNow] = 0
            stack.push([xNow-1,yNow])
        }
        if(matrix[xNow][yNow+1]){
            count++
            matrix[xNow][yNow+1] = 0
            stack.push([xNow,yNow+1])
        }
        if(matrix[xNow][yNow-1]){
            count++
            matrix[xNow][yNow-1] = 0
            stack.push([xNow,yNow-1])
        }
        
    }
    
    return count
}

for(let i = 0 ; i < length ; i++){
    for(let j = 0 ; j < length ; j++){
        if(matrix[i][j]){
            result.push(dfs(i,j))
        }
    }
}

console.log(result.length)
console.log(result.sort((a,b) => a-b).join('\n'))