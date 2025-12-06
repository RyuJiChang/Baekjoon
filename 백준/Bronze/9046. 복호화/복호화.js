const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 1 ; i < input.length ; i++){
    const map = {}
    for(let j = 0 ; j < input[i].length ; j++){
        if(input[i][j] == ' '){
            continue
        }
        else if(map[input[i][j]]){
            map[input[i][j]]++
        }
        else{
            map[input[i][j]] = 1
        }
    }

    const max = Math.max(...Object.values(map))

    let result = ''
    for(let key in map){
        if(map[key] == max){
            if(result == ''){
                result = key
            }
            else{
                result = '?'
                break
            }
        }
    }
    console.log(result)
}