let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let result = []

for(let i = 1 ; i <= input ; i++){
    result.push(`${' '.repeat(i-1)}${'*'.repeat(input*2+1-i*2)}`)
}
for(let i = input-1 ; i >= 1 ; i--){
    result.push(`${' '.repeat(i-1)}${'*'.repeat(input*2+1-i*2)}`)
}

console.log(result.join('\n'))