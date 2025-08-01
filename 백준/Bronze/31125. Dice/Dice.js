const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

for(let i = 1 ; i < input.length ; i++){
    const [s,n,f,m] = input[i]
    const make = s - m
    console.log((make >= n) && (make <= n*f) ? 'YES' : 'NO')
}