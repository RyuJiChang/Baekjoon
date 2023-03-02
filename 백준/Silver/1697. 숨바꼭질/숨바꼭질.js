const [start, target] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

const routeCheck = new Array(Math.max(start,target)*2).fill(0)
routeCheck[start] = 1
const queue = [start]

if(start === target){
    console.log(0)
}

while(queue.length){
    const nowCheck = queue.shift()
    if(nowCheck > 0 && routeCheck[nowCheck-1] === 0){
        routeCheck[nowCheck-1] = routeCheck[nowCheck]+1
        if(nowCheck-1 === target){
            console.log(routeCheck[nowCheck])
        }
        else{
            queue.push(nowCheck-1)
        }
    }
    if(routeCheck[nowCheck+1] === 0){
        routeCheck[nowCheck+1] = routeCheck[nowCheck]+1
        if(nowCheck+1 === target){
            console.log(routeCheck[nowCheck])
        }
        else{
            queue.push(nowCheck+1)
        }
    }
    if(nowCheck < target && routeCheck[nowCheck*2] === 0){
        routeCheck[nowCheck*2] = routeCheck[nowCheck]+1
        if(nowCheck*2 === target){
            console.log(routeCheck[nowCheck])
        }
        else{
            queue.push(nowCheck*2)
        }
    }
}