const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
for(let i = 0 ; i < input.length - 1 ; i++){
    const x = input[i]
    console.log(x**2 * (x+1)**2 / 4)
}