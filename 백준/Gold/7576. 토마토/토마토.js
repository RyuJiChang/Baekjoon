const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const map = []
let day = 0
for(let i = 1 ; i < input.length ; i++){
    map.push([...input[i].split(' ').map(Number)])
}

let queue = []

for(let i = 0 ; i < map.length ; i++){
    for(let j = 0 ; j < map[0].length ; j++){
        if(map[i][j] > 0){
            queue.push([i,j])
        }
    }
}

while(true){
    const newQueue = []
    while(queue.length){
        const [x, y] = queue.pop()
        if(map[x+1] && map[x+1][y] === 0){
            map[x+1][y] = 1
            newQueue.push([x+1,y])
        }
        if(map[x-1] && map[x-1][y] === 0){
            map[x-1][y] = 1
            newQueue.push([x-1,y])
        }
        if(map[x][y+1] === 0){
            map[x][y+1] = 1
            newQueue.push([x,y+1])
        }
        if(map[x][y-1] === 0){
            map[x][y-1] = 1
            newQueue.push([x,y-1])
        }
    }
    if(newQueue.length){
        day++
        queue = [...newQueue]
    }
    else{
        break
    } 
}

for(let i = 0 ; i < map.length ; i++){
    if(map[i].filter(el => el === 0).length){
        day = -1
    }
}

console.log(day)