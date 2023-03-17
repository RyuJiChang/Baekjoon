const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const range = Number(input[0])
const rgbMap = []
const rrbMap = []

let rgbCount= 0
let rrbCount= 0

for(let i = 1 ; i <= range ; i++){
    rgbMap.push(input[i].split(''))
    rrbMap.push(input[i].split('').map(el => {
        if(el === 'G') return 'R'
        return el
    }))
}

const dfs = (startX, startY, str, map) => {
    const stack = [[startX, startY]]
    map[startX][startY] = 0
    while(stack.length){
        const [x, y] = stack.pop()
        if(map[x+1] && map[x+1][y] === str){
            map[x+1][y] = 0
            stack.push([x+1,y])
        }
        if(map[x-1] && map[x-1][y] === str){
            map[x-1][y] = 0
            stack.push([x-1,y])
        }
        if(map[x][y+1] === str){
            map[x][y+1] = 0
            stack.push([x,y+1])
        }
        if(map[x][y-1] === str){
            map[x][y-1] = 0
            stack.push([x,y-1])
        }
    }
}

for(let i = 0 ; i < range ; i++){
    for(let j = 0 ; j < range ; j++){
        if(rgbMap[i][j]){
            rgbCount++
            dfs(i, j, rgbMap[i][j], rgbMap)
        }
        if(rrbMap[i][j]){
            rrbCount++
            dfs(i, j, rrbMap[i][j], rrbMap)
        }
    }
}

console.log(rgbCount, rrbCount)