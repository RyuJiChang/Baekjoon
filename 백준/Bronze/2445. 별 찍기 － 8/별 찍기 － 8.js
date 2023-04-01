const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const result = []

for(let i = 1 ; i <= input ; i++){
    result.push(`${'*'.repeat(i)}${'  '.repeat(input-i)}${'*'.repeat(i)}`)
}
for(let i = input-1 ; i >= 1 ; i--){
    result.push(`${'*'.repeat(i)}${'  '.repeat(input-i)}${'*'.repeat(i)}`)
}

console.log(result.join('\n'))