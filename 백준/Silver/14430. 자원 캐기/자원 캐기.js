const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let [a,b] = input[0].split(' ').map(Number)
let map = input.slice(1)
for(let i = 0 ; i < map.length ; i++){
    map[i] = map[i].split(' ').map(Number)
}

map.unshift(new Array(b).fill(0))
for(let i = 0 ; i <= a ; i++){
    map[i].unshift(0)
}

for(let i = 1 ; i <= a ; i++){
    for(let j = 1 ; j <= b ; j++){
        map[i][j] = Math.max(map[i-1][j]+map[i][j],map[i][j-1]+map[i][j]) 
    }
}
console.log(map[a][b])