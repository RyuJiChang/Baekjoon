const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let count = 1
while (input > count**2) {
    count++
}
const result = []
result.push('x'.repeat(count+2))
for(let i = 0 ; i < count ; i++){
    result.push('x'+ '.'.repeat(count) + 'x')
}
result.push('x'.repeat(count+2))

console.log(result.join('\n'))