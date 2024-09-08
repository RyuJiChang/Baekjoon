const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const graph = {}
let left = input[0][0]
let time = 0
for(let i = 1 ;  i < input.length ; i++){
    graph[i] = {d : 0 , list : new Array()}
}

for(let i = 1 ; i < input.length ; i++){
    graph[i].t = input[i][0]
    graph[i].d = input[i][1]
    for(let j = 2 ; j < input[i].length ; j++){
        graph[input[i][j]].list.push(i)
    }
}

while(left > 0){
    const jobTime = []
    for(let key in graph){
        if(graph[key].d == 0){
            jobTime.push(graph[key].t)
        }
    }
    
    const timePass = Math.min(...jobTime)
    time += timePass
    
    for(let key in graph){
        if(graph[key].d == 0){
            graph[key].t -= timePass
        }
    }
    
    for(let key in graph){
        if(graph[key].d == 0 && graph[key].t == 0){
            graph[key].d = -1
            left--
            for(i = 0 ; i < graph[key].list.length ; i++){
                graph[graph[key].list[i]].d -= 1
            }
        }
    }
}

console.log(time)