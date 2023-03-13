const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const result = []
for(let i = input ; i > 0 ; i--){
    result.push(`${' '.repeat(input-i)}${'*'.repeat(i)}`)
}
console.log(result.join('\n'))