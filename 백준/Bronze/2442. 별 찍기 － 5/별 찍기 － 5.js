const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const result = []
for(let i = 1 ; i <= input ; i++){
    result.push(`${' '.repeat(input-i)}${'*'.repeat(i*2 -1)}`)
}
console.log(result.join('\n'))