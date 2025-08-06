const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    const [a,b] = input[i].split(' ')

    let remnent = 0
    for(let j = 0 ; j < a.length ; j++){
        remnent = (remnent * 10  + a[j]*1) % b
    }
    result.push(`Case ${i}: ${remnent}`)
}
console.log(result.join('\n'))