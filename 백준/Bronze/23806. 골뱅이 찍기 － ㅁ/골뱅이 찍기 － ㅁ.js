const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

const result = []

for(let i = 1 ; i <= input ; i++){
    result.push('@'.repeat(input*5))
}

for(let i = 1 ; i <= input*3 ; i++){
    result.push(`${'@'.repeat(input)}${' '.repeat(input*3)}${'@'.repeat(input)}`)
}

for(let i = 1 ; i <= input ; i++){
    result.push('@'.repeat(input*5))
}

console.log(result.join('\n'))