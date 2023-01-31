const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [boardSizeX, boardSizeY] = input[0].split(' ').map(Number)
const baseBoard = input.slice(1)
let minCost = 64
const boardColorChecker = (x,y) => {
    let WrongColorCount = 0
    for(let i = x ; i < x+8 ; i++){
        for(let j = y ; j < y+8 ; j++){
            if((i+j)%2 === 1 && baseBoard[i][j] === 'B'){
                WrongColorCount++
            }
            else if((i+j)%2 === 0 && baseBoard[i][j] === 'W'){
                WrongColorCount++
            }
        }
    }
    return Math.min(WrongColorCount, 64-WrongColorCount)
}

for(let i = 0 ; i <= boardSizeX-8 ; i++){
    for(let j = 0 ; j <= boardSizeY-8 ; j++){
        minCost = Math.min(minCost, boardColorChecker(i,j))
    }
}

console.log(minCost)