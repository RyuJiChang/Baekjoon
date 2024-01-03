const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 0 ; i < input.length-1 ; i++){
    const a = input[i].split('').reverse().join('')
    let sum = 0
    for(let j = 0 ; j < a.length ; j++){
        sum += (2**(j+1)-1) * a[j]
    }
    result.push(sum)
}

console.log(result.join('\n'))