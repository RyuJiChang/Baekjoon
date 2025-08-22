const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [x,y] = input[0].split(' ').map(Number)

for(let i = 2 ; i < input.length ; i++){
    const used = Number(input[i])
    if(used > 1000){
        console.log(used, 1000 * x + (used - 1000) * y)
    }
    else{
        console.log(used, used * x)
    }
}