const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' '))
const result = []
for(let i = 1 ; i < input.length ; i+=2){
    let easy = input[i][1] == input[i+1][0]
    let hard = input[i][2] == input[i+1][input[i+1].length-1]
    if(easy && hard){
        result.push('BOTH')
    }
    else if(easy){
        result.push('EASY')
    }
    else if(hard){
        result.push('HARD')
    }
    else{
        result.push('OKAY')
    }
}

console.log(result.join('\n'))