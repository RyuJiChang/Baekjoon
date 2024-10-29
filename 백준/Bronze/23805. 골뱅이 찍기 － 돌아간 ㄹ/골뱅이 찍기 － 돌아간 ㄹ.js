const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const result = []

for(let i = 0 ; i < input ; i++){
    result.push('@'.repeat(3*input) + ' '.repeat(input) + '@'.repeat(input))
}

for(let i = 0 ; i < input ; i++){
    result.push('@'.repeat(input) + ' '.repeat(input) + '@'.repeat(input) + ' '.repeat(input) + '@'.repeat(input))
    result.push('@'.repeat(input) + ' '.repeat(input) + '@'.repeat(input) + ' '.repeat(input) + '@'.repeat(input))
    result.push('@'.repeat(input) + ' '.repeat(input) + '@'.repeat(input) + ' '.repeat(input) + '@'.repeat(input))
}

for(let i = 0 ; i < input ; i++){
    result.push('@'.repeat(input) + ' '.repeat(input) + '@'.repeat(3*input))
}


console.log(result.join('\n'))