const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
for(let i = 1 ; i < input.length ; i++){
    const [x,start,end] = input[i]
    console.log(Math.max((x*2 -1) * (end - start),0))
}