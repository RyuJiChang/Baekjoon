const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let str = ''
for(let i = 1 ; i <= input ; i++){
    str += i
}

console.log(str.split('').filter(el => el === '3' || el === '6' || el === '9').length)