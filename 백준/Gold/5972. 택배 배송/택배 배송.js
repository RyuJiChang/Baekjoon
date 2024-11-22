const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const [goal, load] = input.shift()
const graph = new Array(goal).fill().map(() => [])
const distances = new Array(goal).fill(Infinity)
const visited = new Array(goal).fill(false)

distances[0] = 0

for(let i = 0; i < input.length; i++){
    const [start, end, cost] = input[i]
    graph[start - 1].push([end - 1, cost])
    graph[end - 1].push([start - 1, cost])
}


const costList = [[0, 0]]

while(costList.length > 0){
    let minIndex = 0
    
    for(let i = 1 ; i < costList.length ; i++){
        if(costList[i][0] < costList[minIndex][0]){
            minIndex = i
        }
    }
    
    const [costNow, nodeNow] = costList.splice(minIndex, 1)[0]

    for(let i = 0; i < graph[nodeNow].length; i++){
        const [nextNode, cost] = graph[nodeNow][i]
        const newCost = costNow + cost
    
        if(newCost < distances[nextNode]){
            distances[nextNode] = newCost
            costList.push([newCost, nextNode])
        }
    }
}

console.log(distances[goal - 1])