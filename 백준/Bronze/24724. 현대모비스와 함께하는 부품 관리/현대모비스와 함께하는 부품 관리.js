const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[0])
const result = []

for(let i = 1 ; i <= input ; i++){
    result.push('Material Management ' + i)
    result.push('Classification ---- End!')
}

console.log(result.join('\n'))