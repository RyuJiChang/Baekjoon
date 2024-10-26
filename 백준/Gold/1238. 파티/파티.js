const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const [n, m, x] = input.shift()
const map = new Array(n).fill().map(() => new Array(n).fill(Infinity))
let maxTime = 0



for(let i = 0 ; i < input.length ; i++){
    const [start, end, time] = input[i]
    map[start - 1][end - 1] = time
}

for(let i = 0 ; i < n ; i++){
    for(let j = 0 ; j < n ; j++){
        for(let k = 0 ; k < n ; k++){
            map[j][k] = Math.min(map[j][k], map[j][i] + map[i][k])
        }
    }
}

for(let i = 0 ; i < n ; i++){
    if(i != x-1){
        maxTime = Math.max(maxTime, map[i][x-1] + map[x-1][i])         
    }
}


console.log(maxTime)