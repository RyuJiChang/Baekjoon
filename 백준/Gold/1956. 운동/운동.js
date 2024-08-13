const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const [vertex, limit] = input[0]
const map = []
let result = Infinity

for(let i = 0 ; i < vertex ; i++){
    map.push(new Array(vertex).fill(Infinity))
    map[i][i] = 0
}

for(let i = 1 ; i < input.length ; i++){
    const [start, end, length] = input[i]
    map[start-1][end-1] = Math.min(map[start-1][end-1], length)
}

for(let i = 0 ; i < vertex ; i++){
    for(let j = 0 ; j < vertex ; j++){
        for(let k = 0 ; k < vertex ; k++){
            map[j][k] = Math.min(map[j][k], map[j][i] + map[i][k])
        }
    }
}

for(let i = 0 ; i < vertex ; i++){
    for(let j = 0 ; j < vertex ; j++){
        if(i != j){
            result = Math.min(result, map[i][j] + map[j][i])
        }
    }
}

console.log(result == Infinity ? -1 : result)