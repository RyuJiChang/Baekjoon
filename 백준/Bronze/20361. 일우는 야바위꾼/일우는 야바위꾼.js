const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

const balls = new Array(input[0][0]+1).fill(0)

balls[input[0][1]] = 1

for(let i = 1 ; i < input.length ; i++){
    const [before, after] = input[i]
    const temp = balls[before]
    balls[before] = balls[after]
    balls[after] = temp
}

console.log(balls.indexOf(1))