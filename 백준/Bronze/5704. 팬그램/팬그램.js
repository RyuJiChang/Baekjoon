const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 0 ; i < input.length - 1  ; i++){
    let result = 'Y'

    for(let j = 97 ; j <= 122 ; j++){
        if(!input[i].includes(String.fromCharCode(j))){
            result = 'N'
            break
        }
    }
    console.log(result)
}