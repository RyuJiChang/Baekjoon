const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [vertex, num] = input[0].split(' ').map(Number)
const map = []
const result = []

for(let i = 0 ; i < vertex ; i++){
    map.push(new Array(vertex).fill(false))
    map[i][i] = true
}

for(let i = 1 ; i <= num ; i++){
    const [x, y] = input[i].split(' ').map(Number)
    map[x-1][y-1] = true
}

for(let i = 0 ; i < vertex ; i++){
    for(let j = 0 ; j < vertex ; j++){
        for(let k = 0 ; k < vertex ; k++){
            if(map[j][i] && map[i][k]){
                map[j][k] = true
            }
        }
    }
}

for(let i = 2 + num ; i < input.length ; i++){
    const [x, y] = input[i].split(' ').map(Number)
    if(map[x-1][y-1]){
        result.push(-1)
    }
    else if(map[y-1][x-1]){
        result.push(1)
    }
    else{
        result.push(0)
    }
}

console.log(result.join('\n'))