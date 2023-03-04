const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [xLength, yLength] = input[0].split(' ').map(Number)
const [xTarget, yTarget] = [xLength-1, yLength-1]
const map = []
const queue = [[0,0]]

for(let i = 1 ; i < input.length ; i++){
    map.push([...input[i].split('').map(Number)])
}
for(let i = 0 ; i < map.length ; i++){
    for(let j = 0 ; j < map[0].length ; j++){
        if(map[i][j]){
            map[i][j] = 10000
        }
    }
}
map[0][0] = 1

while (queue.length) {
    const [xNow, yNow] = queue.shift()
    if(map[xNow+1] && map[xNow][yNow] +1 < map[xNow+1][yNow]){
        map[xNow+1][yNow] = map[xNow][yNow]+1
        if(xNow+1 === xTarget && yNow === yTarget){
            break
        }
        queue.push([xNow+1,yNow])
    }
    if(map[xNow][yNow] +1 < map[xNow][yNow+1]){
        map[xNow][yNow+1] = map[xNow][yNow]+1
        if(xNow === xTarget && yNow+1 === yTarget){
            break
        }
        queue.push([xNow,yNow+1])
    }
    if(map[xNow-1] && map[xNow][yNow] +1 < map[xNow-1][yNow]){
        map[xNow-1][yNow] = map[xNow][yNow]+1
        if(xNow-1 === xTarget && yNow === yTarget){
            break
        }
        queue.push([xNow-1,yNow])
    }
    if(map[xNow][yNow] +1 < map[xNow][yNow-1]){
        map[xNow][yNow-1] = map[xNow][yNow]+1
        if(xNow === xTarget && yNow-1 === yTarget){
            break
        }
        queue.push([xNow,yNow-1])
    }
}

console.log(map[xTarget][yTarget])