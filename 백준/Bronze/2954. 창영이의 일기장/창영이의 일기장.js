const input = require('fs').readFileSync('/dev/stdin').toString().trim()

let str = ''
const map = {a:1, e:1, i:1, o:1, u:1}
for(let i = 0 ; i < input.length ; i++){
    str += input[i]
    if(map[input[i]]){
        i+=2
    }
}
console.log(str)