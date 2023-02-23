const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const routeCheck = new Array(101).fill(1)
let virusCount = -1
const nodeList = {}
const nodeStack = [1]

for(let i = 2 ; i < input.length ; i++){
    const [a, b] = input[i].split(' ')
    if(nodeList[a]){
        nodeList[a].push(b)
    }
    else{
        nodeList[a] = [b]
    }
    if(nodeList[b]){
        nodeList[b].push(a)
    }
    else{
        nodeList[b] = [a]
    }
}

while(nodeStack.length){
    const nodeNow = nodeStack.pop()
    if(routeCheck[nodeNow]){
        routeCheck[nodeNow] = 0
        virusCount++
    }
    for(let i = 0 ; i < nodeList[nodeNow].length ; i++){
        if(routeCheck[nodeList[nodeNow][i]]){
            nodeStack.push(nodeList[nodeNow][i])
        }
    }
}

console.log(virusCount)