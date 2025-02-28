const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const result = []

for(let i = 1 ; i < input.length ; i++){
    const [start, sec] = input[i]
    result.push(start - Math.floor(sec / 7) + Math.floor(sec / 4))
}

console.log(result.join('\n'))