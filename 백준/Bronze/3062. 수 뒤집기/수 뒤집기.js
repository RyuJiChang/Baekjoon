const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 1 ; i < input.length ; i++){
    let a = Number(input[i])
    let b = Number(input[i].split('').reverse().join(''))
    let str = String(a+b)
    console.log(str == str.split('').reverse().join('') ? 'YES' : 'NO')
}