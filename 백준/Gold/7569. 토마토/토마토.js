const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))


const [xLength, yLength, zLength] = input[0]
const map = []
let day = 0

for(let i = 1 ; i < input.length ; i+=yLength){
    const arrForPush = []
    for(let j = i ; j < i+yLength ; j++){
        arrForPush.push(...[input[j]])
    }
    map.push(arrForPush)
}

let stack = []

for(let i = 0 ; i < zLength ; i++){
    for(let j = 0 ; j < yLength ; j++){
        for(let k = 0 ; k < xLength ; k++)
        if(map[i][j][k] > 0){
            stack.push([i,j,k])
        }
    }
}

while(true){
    const newStack = []
    while(stack.length){
        const [z, y, x] = stack.pop()
        if(map[z+1] && map[z+1][y] && map[z+1][y][x] === 0){
            map[z+1][y][x] = 1
            newStack.push([z+1,y,x])
        }
        if(map[z-1] && map[z-1][y] && map[z-1][y][x] === 0){
            map[z-1][y][x] = 1
            newStack.push([z-1,y,x])
        }
        if(map[z][y+1] && map[z][y+1][x] === 0){
            map[z][y+1][x] = 1
            newStack.push([z,y+1,x])
        }
        if(map[z][y-1] && map[z][y-1][x] === 0){
            map[z][y-1][x] = 1
            newStack.push([z,y-1,x])
        }
        if(map[z][y][x+1] === 0){
            map[z][y][x+1] = 1
            newStack.push([z,y,x+1])
        }
        if(map[z][y][x-1] === 0){
            map[z][y][x-1] = 1
            newStack.push([z,y,x-1])
        }
    }
    if(newStack.length){
        day++
        stack = [...newStack]
    }
    else{
        break
    } 
}

for(let i = 0 ; i < zLength ; i++){
    for(let j = 0 ; j < yLength ; j++){
        if(map[i][j].filter(el => el === 0).length){
            day = -1
        }
    }
}

console.log(day)