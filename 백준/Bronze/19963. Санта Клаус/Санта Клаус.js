const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const checkMap = {}
const result = []
for(let i = 1 ; i <= input[0][0] ; i++){
    checkMap[i] = 1
}

for(let i = 1 ; i < input.length ; i++){
    for(let j = 0 ; j < input[i].length ; j++){
        checkMap[input[i][j]] = 0
    }
}

for(let key in checkMap){
    if(checkMap[key]){
        result.push(key)
    }
}

console.log(result.length)
console.log(result.join(' '))
