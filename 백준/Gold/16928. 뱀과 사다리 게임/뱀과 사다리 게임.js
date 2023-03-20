const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const routeCheck = new Array(101).fill(50)
routeCheck[1] = 0
const snakeLadder = {}

for(let i = 1 ; i < input.length ; i++){
    const [start, end] = input[i].split(' ').map(Number)
    snakeLadder[start] = end
}

const queue = [1]

outer:while(queue.length){
    const now = queue.shift()
    const nowValue = routeCheck[now]
    for(let i = 1 ; i <= 6 ; i++){
        const next = snakeLadder[now+i] || now+i
        if(nowValue + 1 < routeCheck[next]){
            routeCheck[next] = nowValue+1
            queue.push(next)
            
        }
        if(next === 100) break outer
    }
}

console.log(routeCheck[100])