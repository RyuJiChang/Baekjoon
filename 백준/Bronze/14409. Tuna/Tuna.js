const input = require('fs').readFileSync(0).toString().trim().split('\n')
const standard = Number(input[1])
let point = 0

for(let i = 2 ; i < input.length ; i++){
    const [x, y] = input[i].split(' ').map(Number).sort((a,b) => a - b)
    if(y - x <= standard){
        point += y
    }
    else{
        point += Number(input[i+1])
        i++
    }
}

console.log(point)
    