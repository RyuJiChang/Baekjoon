const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const key = input.charCodeAt(0) ^ 'C'.charCodeAt(0)
let str = ''

for(let i = 0 ; i < input.length ; i++){
    str += String.fromCharCode(input.charCodeAt(i) ^ key)
}
console.log(str)