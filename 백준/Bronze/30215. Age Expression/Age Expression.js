const [target,x,y] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
let result = 0

for(let i = 1 ; i * x < target ; i++){
    if((target - i * x) % y === 0){
        result = 1
        break
    }
}

console.log(result)