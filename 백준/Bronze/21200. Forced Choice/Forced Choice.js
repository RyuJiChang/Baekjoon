const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const [cardNum, target, turn] = input.shift()
const result = []

for(let i = 0 ; i < input.length ; i++){
    input[i].shift()
    if(input[i].includes(target)){
        result.push('KEEP')        
    }
    else{
        result.push('REMOVE')
    }
}

console.log(result.join('\n'))