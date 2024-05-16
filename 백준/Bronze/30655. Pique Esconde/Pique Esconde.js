const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 0 ; i < input.length ; i++){
    const [x, n] = input[i].split(' ').map(Number)
    if(x == 0){break}
    const map = {}
    for(let j = 1 ; j <= x ; j++){
        map[j] = 1
    }
    map[n] = 0
    for(let j = i+1 ; j < i + x - 1 ; j++){
        map[input[j]] = 0 
    }

    for(let key in map){
        if(map[key]){
            result.push(key)
            break
        }
    }
    i += x-2
}

console.log(result.join('\n'))