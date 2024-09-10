const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let point = 0
let count = 0

for(let i = 1 ; i < input.length ; i++){
    const [x, y] = input[i].split(' ')
    if(x == 'jinju'){
        point = Number(y)
        break
    }
}

for(let i = 1 ; i < input.length ; i++){
    const price = Number(input[i].split(' ')[1])
    if(price > point){
        count++
    }
}
console.log(point)
console.log(count)