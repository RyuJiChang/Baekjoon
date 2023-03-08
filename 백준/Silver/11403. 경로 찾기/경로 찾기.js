const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const map = []

for(let i = 1 ; i < input.length ; i++){
    map.push(input[i].split(' ').map(Number))
}

for(let i = 0 ; i < map.length ; i++){
    for(let j = 0 ; j < map.length ; j++){
        for(let k = 0 ; k < map.length ; k++){
            if(map[j][i] && map[i][k]){
                map[j][k] = 1
            }
        }
    }
}

console.log(map.map(el => el.join(' ')).join('\n'))