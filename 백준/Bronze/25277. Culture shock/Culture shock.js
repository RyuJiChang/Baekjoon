const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const strArr = input[1].split(' ')
const target = ['he', 'him', 'she', 'her']
let count = 0
for(let i = 0 ; i < strArr.length ; i++){
    if(target.includes(strArr[i])){
        count++
    }
}

console.log(count)