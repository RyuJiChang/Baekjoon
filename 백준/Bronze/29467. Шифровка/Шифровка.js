const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const list = []

for(let i = 0 ; i < input.length ; i++){
    list.push(input.slice(i))
}

console.log(list.sort()[list.length-1])