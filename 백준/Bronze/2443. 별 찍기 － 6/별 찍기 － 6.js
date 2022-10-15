let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let result = []
for(let i = input-1 ; i >= 0 ; i--){
    result.push(`${` `.repeat(input-i-1)}${'**'.repeat(i)}*`)
}

console.log(result.join('\n'))