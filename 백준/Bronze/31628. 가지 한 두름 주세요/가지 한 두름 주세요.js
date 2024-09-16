const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' '))

let result = 0

for(let i = 0 ; i < input.length ; i++){
    let first = input[i][0]
    let check = true
    for(let j = 1 ; j < input.length ; j++){
        if(input[i][j] != first){
            check = false
        }
    }
    if(check){
        result = 1
        break
    }
}

for(let j = 0 ; j < input.length ; j++){
    let first = input[0][j]
    let check = true
    for(let i = 1 ; i < input.length ; i++){
        if(input[i][j] != first){
            check = false
        }
    }
    if(check){
        result = 1
        break
    }
}

console.log(result)