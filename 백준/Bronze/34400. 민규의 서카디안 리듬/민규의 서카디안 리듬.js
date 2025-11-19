const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const result = []

for(let i = 1 ; i < input.length ; i++){
    if(input[i]%25 < 17){
        result.push('ONLINE')
    }
    else{
        result.push('OFFLINE')
    }
}

console.log(result.join('\n'))