const [a,b,c] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const result = []

for(let i = 0 ; i < a ; i++){
    result.push('*' + ' '.repeat(b) + '*' + ' '.repeat(b) + '*')
}

result.push('*'.repeat(3 + b * 2))

for(let i = 0 ; i < c ; i++){
    result.push(' '.repeat(b + 1) + '*')    
}

console.log(result.join('\n'))