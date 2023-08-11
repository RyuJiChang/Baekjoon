const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const result = []
for(let i = 0 ; i < input ; i++){
    result.push('@@@@@'.repeat(input))
}

for(let i = 0 ; i < input * 4 ; i++){
    result.push('@'.repeat(input))
}

console.log(result.join('\n'))