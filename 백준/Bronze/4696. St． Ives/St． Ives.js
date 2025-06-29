const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

for(let i = 0 ; i < input.length - 1 ; i++){
    const n = input[i]
    const a = Math.round(n**4 * 100)/100
    const b = Math.round(n**3 * 100)/100
    const c = Math.round(n**2 * 100)/100 
    const d = Math.round(n**1 * 100)/100
    const result = a + b + c + d + 1

    console.log(result.toFixed(2))
}