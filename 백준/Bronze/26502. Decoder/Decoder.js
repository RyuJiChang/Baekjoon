const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let result = []
const map = {y :'a', a : 'e', e : 'i', i : 'o', o : 'u', u : 'y', Y :'A', A : 'E', E : 'I', I : 'O', O : 'U', U : 'Y'}
for(let i = 1 ; i < input.length ; i++){
    let str = ''
    for(let j = 0 ; j < input[i].length ; j++){
        if(map[input[i][j]] != null){
            str += map[input[i][j]]
        }
        else{
            str += input[i][j]
        }
    }
    result.push(str)
}

console.log(result.join('\n'))