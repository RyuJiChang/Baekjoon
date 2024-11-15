const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const target = input[0]
let str = input[1]

while (str.length > target.length) {
    if(str[str.length-1] == 'A'){
        str = str.slice(0, str.length -1)
    }
    else{
        str = str.slice(0, str.length -1).split('').reverse().join('')
    }
}

console.log(target == str ? 1 : 0)