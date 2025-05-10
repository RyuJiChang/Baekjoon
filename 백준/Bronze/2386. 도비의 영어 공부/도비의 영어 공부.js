const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.toLowerCase())
const result = []

for(let i = 0 ; i < input.length - 1 ; i++){
    const list = input[i].split('')
    result.push(list[0] + ' ' + (list.filter(el => el == list[0]).length - 1))
}

console.log(result.join('\n'))