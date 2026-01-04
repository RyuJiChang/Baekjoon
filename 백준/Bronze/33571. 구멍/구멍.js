const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const str = 'AabDdegOoPpQqR@'

let count = 0

for(let i = 0 ; i < input.length ; i++){
    if(str.indexOf(input[i]) != -1){
        count++
    }
    else if(input[i] == 'B'){
        count += 2
    }
}

console.log(count)