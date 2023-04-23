const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

const bessie = Math.max(Math.abs(input[0][0]-input[2][0]), Math.abs(input[0][1]-input[2][1]))
const daisy = Math.abs(input[1][0]-input[2][0]) + Math.abs(input[1][1]-input[2][1])
if(bessie > daisy){
    console.log('daisy')
}
else if(bessie < daisy){
    console.log('bessie')
}
else{
    console.log('tie')
}