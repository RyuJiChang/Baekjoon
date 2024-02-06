const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const strs = input.pop()
const rune = {}
let result = ''

for(let i = 1 ; i < input.length ; i++){
    const [str, num] = input[i].split(' ')
    rune[num] = str
}

for(let i = 0 ; i < strs.length ; i+=4){
    const str = rune[strs.slice(i, i+4)]
    result += (str ? str : '?')
}

console.log(result)