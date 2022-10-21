let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let result = []
for(let i = 1 ; i <= input ; i++){
    result.push(`${' '.repeat(input-i)}${'**'.repeat(i-1)}*`)
}
for(let i = input-1 ; i > 0 ; i--){
    result.push(`${' '.repeat(input-i)}${'**'.repeat(i-1)}*`)
}
console.log(result.join('\n'))