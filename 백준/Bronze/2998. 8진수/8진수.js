const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const str = '0'.repeat(3 - input.length % 3) + input
let result = ''
const map = {
    '000' : '0',
    '001' : '1',
    '010' : '2',
    '011' : '3',
    '100' : '4',
    '101' : '5',
    '110' : '6',
    '111' : '7'
}

for(let i = 0 ; i < str.length ; i+=3){
    result += map[str.slice(i, i+3)]
}

console.log(result.replace(/^0+/, '') || '0')