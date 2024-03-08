const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [n,x,y] = input.shift().split(' ').map(Number)

for(let i = 0 ; i < input.length ; i += x){
    let max = 0
    let min = Infinity
    for(let j = i ; j < i + x ; j++){
        if(input[j].includes('#')){
            max = Math.max(max, j)
            min = Math.min(min, j)
        }
    }
    console.log(max - min)
}