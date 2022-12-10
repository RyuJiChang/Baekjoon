let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let str = ''
for(let i = 0 ; i < input[1].length ; i++){
    let el = input[1][i]
    for(let j = 1 ; j < input.length ; j++){
        if(el !== input[j][i]){
            el = '?'
            break
        }
    }
    str += el
    
}
console.log(str)