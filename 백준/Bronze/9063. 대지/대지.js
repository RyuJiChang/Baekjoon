const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let xMin = 10000
let yMin = 10000
let xMax = -10000
let yMax = -10000

for(let i = 1 ; i < input.length ; i++){
    const [x,y] = input[i].split(' ').map(Number)
    if(x < xMin){
        xMin = x
    }
    if(x > xMax){
        xMax = x
    }
    if(y < yMin){
        yMin = y
    }
    if(y > yMax){
        yMax = y
    }
}
console.log((xMax-xMin)*(yMax-yMin))