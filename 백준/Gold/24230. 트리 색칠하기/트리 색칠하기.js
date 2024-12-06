const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const n = Number(input[0])
const target = input[1].split(' ').map(Number)
const node = new Array(n).fill().map(el => [])
const colorList = new Array(n).fill(0)
let count = 0

const coloring = (index, color) => {
    colorList[index] = color
    
    if(node[index] == null){
        return
    }

    for(let i = 0 ; i < node[index].length ; i++){
        coloring(node[index][i], color)
    }
}

for(let i = 2 ; i < input.length ; i++){
    const [a, b] = input[i].split(' ').map(el => el - 1)
    node[a].push(b)
    node[b].push(a)
}

const dfs = (index, parent, color) => {
    if(target[index] != color){
        count++
        color = target[index]
    }

    for(let i = 0 ; i < node[index].length ; i++){
        if(node[index][i] != parent){
            dfs(node[index][i], index, color)
        }
    }
}

dfs(0, -1, 0);

console.log(count)