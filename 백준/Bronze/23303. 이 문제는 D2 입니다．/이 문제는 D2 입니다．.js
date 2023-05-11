const input = require('fs').readFileSync('/dev/stdin').toString().trim()
let result = `unrated`

if(input.includes('d2') || input.includes('D2')){
    result = 'D2'
}
console.log(result)