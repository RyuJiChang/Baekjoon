const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' '))
const result = []

for(let i = 2 ; i < input.length ; i++){
    if(input[i][0] == input[0][0] || input[i][1] == input[0][1]){
        result.push(0)
    }
    else{
        result.push(1)
    }
}

console.log(result.join('\n'))