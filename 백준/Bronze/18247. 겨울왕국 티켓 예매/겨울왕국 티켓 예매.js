const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []
for(let i = 1 ; i < input.length ; i++){
    const [x, y] = input[i].split(' ').map(Number)
    if(x < 12 || y < 4){
        result.push(-1)
    }
    else{
        result.push(11*y + 4)
    }
}

console.log(result.join('\n'))
