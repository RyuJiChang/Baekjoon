const [x, y, wall] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

const xLength = x - wall*2
const yLength = y - wall*2

if(xLength > 0 && yLength > 0){
    console.log(xLength * yLength)
}
else{
    console.log(0)
}