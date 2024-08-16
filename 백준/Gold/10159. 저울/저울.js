const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const vertex = Number(input[0])
const map = []
const result = []

for(let i = 0 ; i < vertex ; i++){
    map.push(new Array(vertex).fill(false))
}

for(let i = 2 ; i < input.length ; i++){
    const [x,y] = input[i].split(' ').map(Number)
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

for(let i = 0 ; i < vertex ; i++){
    let count = vertex - 1 
    for(let j = 0 ; j < vertex ; j++){
        if(i == j){
            continue
        }
        if(map[i][j]){
            count--
        }
        else if(map[j][i]){
            count--
        }
    }
    result.push(count)
}

console.log(result.join('\n'))