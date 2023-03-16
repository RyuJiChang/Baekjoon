const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const strs = input[0].split('')

for(let i = 2 ; i < input.length ; i++){
    const [a, b] = input[i].split(' ').map(Number)
    const temp = strs[a]
    strs[a] = strs[b]
    strs[b] = temp
}

console.log(strs.join(''))