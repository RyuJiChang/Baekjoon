const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(BigInt)
for(let i = 0 ; i < input.length - 1 ; i++){
    console.log(((input[i] + 41n) / 42n) == (input[i] / 42n) ? 'PREMIADO' : 'TENTE NOVAMENTE')
}