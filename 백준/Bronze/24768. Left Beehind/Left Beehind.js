const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 0 ; i < input.length - 1 ; i++){
    const [x, y] = input[i].split(' ').map(Number)
    if(x + y == 13){
        result.push('Never speak again.')
    }
    else if(x > y){
        result.push('To the convention.')
    }
    else if(x < y){
        result.push('Left beehind.')
    }
    else{
        result.push('Undecided.')
    }
}

console.log(result.join('\n'))