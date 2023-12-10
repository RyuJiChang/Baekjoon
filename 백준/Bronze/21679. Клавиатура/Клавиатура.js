const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = input[1].split(' ').map(Number)
const arr = input[3].split(' ').map(Number)
for(let i = 0 ; i < arr.length ; i++){
    result[arr[i]-1]--
}

console.log(result.map(el => el >= 0 ? 'no' : 'yes').join('\n'))