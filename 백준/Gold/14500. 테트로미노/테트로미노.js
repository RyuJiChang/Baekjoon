const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const [N, M] = input.shift()
let max = 0
const check = [
    [[0,0], [-1,0], [1,0], [0,1]],
    [[0,0], [-1,0], [0,-1], [0,1]],
    [[0,0], [-1,0], [1,0], [0,-1]],
    [[0,0], [1,0], [0,-1], [0,1]],
    
    [[0,0], [1,0], [1,1], [1,2]],
    [[0,0], [0,1], [-1,1], [-2,1]],
    [[0,0], [-1,0], [-1,-1], [-1,-2]],
    [[0,0], [0,-1], [1,-1], [2,-1]],
    
    [[0,0], [-1,0], [-1,1], [-1,2]],
    [[0,0], [0,1], [1,1], [2,1]],
    [[0,0], [1,0], [1,-1], [1,-2]],
    [[0,0], [0,-1], [-1,-1], [-2,-1]],
    
    [[0,0], [1,0], [1,1], [2,1]],
    [[0,0], [0,1], [-1,1], [-1,2]],
    
    [[0,0], [-1,0], [-1,1], [-2,1]],
    [[0,0], [0,1], [1,1], [1,2]],
    
    [[0,0], [1,0], [2,0], [3,0]],
    [[0,0], [0,1], [0,2], [0,3]],
    
    [[0,0], [1,0], [1,1], [0,1]]
]


const getSum = (x, y) => {
    let maxSum = 0
    for(let i = 0 ; i < check.length ; i++){
        let sum = 0
        for(let j = 0 ; j < 4 ; j++){
            let xNow = x + check[i][j][1]
            let yNow = y + check[i][j][0]
            if(xNow >= 0 && xNow < N && yNow >= 0 && yNow < M ){
                sum += input[xNow][yNow]
            }
        }
        maxSum = Math.max(sum, maxSum)
    }
    return maxSum
}

for(let i = 0 ; i < N ; i++){
    for(let j = 0 ; j < M ; j++){
        max = Math.max(max, getSum(i,j))
    }
}

console.log(max)
