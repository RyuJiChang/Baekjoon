const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const [xLength, yLength] = input.shift()
const map = []
let x,y
for(let i = 0 ; i < xLength ; i++){
    map.push(new Array(yLength).fill(0))
    for(let j = 0 ; j < yLength ; j++){
        if(input[i][j] === 2){
            x = i
            y = j
        }
    }
}
const queue = [[x,y]]

const check = (x, y) => {
    if(0 <= x && x < xLength && 0 <= y && y < yLength){
        return true 
    }
    return false
}

while (queue.length) {
    const [xNow, yNow] = queue.shift()
    if(check(xNow+1,yNow) && input[xNow+1][yNow] === 1){
        input[xNow+1][yNow] = 0
        map[xNow+1][yNow] = map[xNow][yNow] + 1
        queue.push([xNow+1,yNow])
    }
    if(check(xNow-1,yNow) && input[xNow-1][yNow] === 1){
        input[xNow-1][yNow] = 0
        map[xNow-1][yNow] = map[xNow][yNow] + 1
        queue.push([xNow-1,yNow])
    }
    if(check(xNow,yNow+1) && input[xNow][yNow+1] === 1){
        input[xNow][yNow+1] = 0
        map[xNow][yNow+1] = map[xNow][yNow] + 1
        queue.push([xNow,yNow+1])
    }
    if(check(xNow,yNow-1) && input[xNow][yNow-1] === 1){
        input[xNow][yNow-1] = 0
        map[xNow][yNow-1] = map[xNow][yNow] + 1
        queue.push([xNow,yNow-1])
    }
}

for(let i = 0 ; i < xLength ; i++){
    for(let j = 0 ; j < yLength ; j++){
        if(input[i][j] === 1){
            map[i][j] = -1
        }
    }
}
console.log(map.map(el => el.join(' ')).join('\n'))