let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [xLength, yLength] = input.shift().split(' ').map(Number)
input = input.map(el => el.split(''))
let count = 0
let xStart, yStart

for(let i = 0 ; i < xLength ; i++){
    for(let j = 0 ; j < yLength ; j++){
        if(input[i][j] === 'I'){
            xStart = i
            yStart = j
        }
    }
}
const stack = [[xStart, yStart]]

const checker = (x,y) => {
    if(0 <= x && x < xLength && 0 <= y && y < yLength){
        return true
    }
    return false
}

while(stack.length){
    const [x, y] = stack.pop()
    if(checker(x+1,y) && input[x+1][y] !== 'X'){
        if(input[x+1][y] === 'P') count++
        input[x+1][y] = 'X'
        stack.push([x+1,y])
    }
    if(checker(x-1,y) && input[x-1][y] !== 'X'){
        if(input[x-1][y] === 'P') count++
        input[x-1][y] = 'X'
        stack.push([x-1,y])
    }
    if(checker(x,y+1) && input[x][y+1] !== 'X'){
        if(input[x][y+1] === 'P') count++
        input[x][y+1] = 'X'
        stack.push([x,y+1])
    }
    if(checker(x,y-1) && input[x][y-1] !== 'X'){
        if(input[x][y-1] === 'P') count++
        input[x][y-1] = 'X'
        stack.push([x,y-1])
    }
}

console.log(count > 0 ? count : 'TT')