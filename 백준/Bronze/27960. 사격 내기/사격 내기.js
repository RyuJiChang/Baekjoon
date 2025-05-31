const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(el => Number(el).toString(2))
const maxLen = Math.max(input[0].length, input[1].length)

const bin1 = input[0].padStart(maxLen, '0')
const bin2 = input[1].padStart(maxLen, '0')

let point = 0

for(let i = 0; i < maxLen; i++){
    if(bin1[maxLen - 1 - i] !== bin2[maxLen - 1 - i]){
        point += 2 ** i
    }
}

console.log(point)
