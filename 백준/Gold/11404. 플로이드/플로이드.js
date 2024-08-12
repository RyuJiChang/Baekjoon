const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const vertex = Number(input[0])
const map = []

for(let i = 0 ; i < vertex ; i++){
    map.push(new Array(vertex).fill(10000000))
    map[i][i] = 0
}

for(let i = 2 ; i < input.length ; i++){
    [start, end, cost] = input[i].split(' ').map(Number)
    map[start-1][end-1] = Math.min(map[start-1][end-1], cost)
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
        if(map[i][j] == 10000000){
            map[i][j] = 0
        }
    }
}

console.log(map.map(el => el.join(' ')).join('\n'))