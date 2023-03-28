const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const result = []

for(let i = 1 ; i <= input ; i++){
    if(i%2){
        result.push(`*${' *'.repeat(input-1)}`)
    }
    else{
        result.push(' *'.repeat(input))
    }
}

console.log(result.join('\n'))