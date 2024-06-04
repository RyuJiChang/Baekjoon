const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const Map = {A : 1, B : 2, D : 1, O : 1, P : 1, Q : 1, R : 1}
const result = []
for(let i = 1 ; i < input.length ; i++){
    let count = 0
    for(let j = 0 ; j < input[i].length ; j++){
        if(Map[input[i][j]]){
            count += Map[input[i][j]]
        }
    }
    result.push(count)
}

console.log(result.join('\n'))