const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const map = {
    'b' : 'd',
    'p' : 'q',
    'd' : 'b',
    'q' : 'p',
    'i' : 'i',
    'o' : 'o',
    'v' : 'v',
    'w' : 'w',
    'x' : 'x'
}

for(let i = 0 ; i < input.length -1 ; i++){
    let result = ''
    for(let j = 0 ; j < input[i].length ; j++){
        if(map[input[i][j]]){
            result += map[input[i][j]]
        }
        else{
            result = 'INVALID'
            break
        }
    }
    console.log(result == 'INVALID' ? 'INVALID' : result.split('').reverse().join(''))
}