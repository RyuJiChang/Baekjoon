const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const result = []

for(let i = 1 ; i <= input ; i++){
    result.push(i * (input + 1 - i))
}

console.log(result.join('\n'))