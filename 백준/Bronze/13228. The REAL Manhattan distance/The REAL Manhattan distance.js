let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []

for(let i = 1 ; i < input.length ; i++){
    let [x1,y1,floor1,x2,y2,floor2] = input[i].split(' ').map(Number)
    result.push(floor1+floor2+Math.abs(x1-x2)+Math.abs(y1-y2))
}

console.log(result.join('\n'))