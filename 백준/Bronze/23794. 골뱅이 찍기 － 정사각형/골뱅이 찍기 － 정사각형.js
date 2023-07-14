const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const result = []

result.push('@'.repeat(input+2))
for(let i = 0 ; i < input ; i++){
    result.push('@'+' '.repeat(input)+'@')
}
result.push('@'.repeat(input+2))

console.log(result.join('\n'))