const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 1 ; i < input.length ; i+=2){
    const [x,y] = input[i].split(' ').map(Number)

    console.log(Math.ceil(Math.max(...input[i+1].split(' ').map(Number))/1000 * y))
}