const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const map = {}
const result = []

for(let i = 0 ; i < input[0].length ; i++){
    if(map[input[0][i]]){
        map[input[0][i]]++
    }
    else{
        map[input[0][i]] = 1
    }
}

for(let i = 2 ; i < input.length ; i++){
    const newMap = {...map}
    let pass = true
    for(let j = 0 ; j < input[i].length ; j++){
        if(newMap[input[i][j]]){
            newMap[input[i][j]]--
        }
        else{
            pass = false
            break
        }
    }
    if(pass){
        console.log(input[i])
    }
}