const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let result = 'Deletion succeeded'

if(input[0] % 2){
    for(let i = 0 ; i < input[1].length ; i++){
        if(input[1][i] == input[2][i]){
            result = 'Deletion failed'
            break
        }
    }
}
else{
    for(let i = 0 ; i < input[1].length ; i++){
        if(input[1][i] != input[2][i]){
            result = 'Deletion failed'
            break
        }
    }
}

console.log(result)