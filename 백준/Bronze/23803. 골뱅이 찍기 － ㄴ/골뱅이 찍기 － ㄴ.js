const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const result = []

for(let i = 0 ; i < 4 ; i++){
    for(let j = 0 ; j < input ; j++){
        result.push('@'.repeat(input))
    }
}

for(let j = 0 ; j < input ; j++){
    result.push('@@@@@'.repeat(input))
}

console.log(result.join('\n'))