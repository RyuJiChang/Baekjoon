const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const vertex = Number(input[0])
const map = []
const point = []

for(let i = 0 ; i < vertex ; i++){
    map.push(new Array(vertex).fill(50))
    map[i][i] = 1
}

for(let i = 1 ; i < input.length - 1 ; i++){
    const [start, end] = input[i].split(' ').map(Number)
    map[start-1][end-1] = 1
    map[end-1][start-1] = 1
}

for(let i = 0 ; i < vertex ; i++){
    for(let j = 0 ; j < vertex ; j++){
        for(let k = 0 ; k < vertex ; k++){
            map[j][k] = Math.min(map[j][k], map[j][i] + map[i][k])
        }
    }
}

for(let i = 0 ; i < vertex ; i++){
    point.push(Math.max(...map[i]))
}

const results = []
const limit = Math.min(...point)

for(let i = 0 ; i < vertex ; i++){
    if(point[i] == limit){
        results.push(i+1)
    }
}

console.log(limit, results.length)
console.log(...results)