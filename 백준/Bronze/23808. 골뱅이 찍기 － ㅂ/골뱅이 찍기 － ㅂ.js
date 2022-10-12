let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let result = []
result.push()
for(let i = 0 ; i < input ; i++){
    result.push(`${'@'.repeat(input)}${'   '.repeat(input)}${'@'.repeat(input)}`)
    result.push(`${'@'.repeat(input)}${'   '.repeat(input)}${'@'.repeat(input)}`)
}
for(let i = 0 ; i < input ; i++){
    result.push(`@@@@@`.repeat(input))
}
for(let i = 0 ; i < input ; i++){
    result.push(`${'@'.repeat(input)}${'   '.repeat(input)}${'@'.repeat(input)}`)
}
for(let i = 0 ; i < input ; i++){
    result.push(`@@@@@`.repeat(input))
}

console.log(result.join('\n'))

