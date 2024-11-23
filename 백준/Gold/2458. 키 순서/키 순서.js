const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const student = input[0][0]
const graph = new Array(student).fill().map(el => new Array(student).fill(false))
let checkCount = 0
    
for(let i = 0 ; i < student ; i++){
    graph[i][i] = true
}

for(let i = 1 ; i < input.length ; i++){
    const [start, end] = input[i]
    graph[start-1][end-1] = true
}

for(let i = 0 ; i < student ; i++){
    for(let j = 0 ; j < student ; j++){
        for(let k = 0 ; k < student ; k++){
            graph[j][k] = (graph[j][i] && graph[i][k]) || graph[j][k]
        }
    }
}

for(let i = 0 ; i < student ; i++){
    let checker = true
    for(let j = 0 ; j < student ; j++){
        const canCheck = graph[i][j] || graph[j][i]
        if(canCheck == false){
            checker = false
        }
    }
    if(checker){
        checkCount++
    }
}

console.log(checkCount)