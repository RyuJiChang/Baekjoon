const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const map = [null, 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']
const result = []

for(let i = 1 ; i < map.length ; i++){
    if(input.indexOf(map[i]) != -1){
        result.push(i)
    }
}

console.log(result.join(' '))