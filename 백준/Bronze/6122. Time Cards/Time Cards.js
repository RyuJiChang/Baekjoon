const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' '))
const result = new Array(Number(input[0][0])).fill(0)

for(let i = 1 ; i < input.length ; i++){
    const [n, type, h, m] = input[i]
    if(type == 'START'){
        result[n-1] -= (h*60 + m*1)
    }
    else{
        result[n-1] += (h*60 + m*1)
    }
}

for(let i = 0 ; i < result.length ; i++){
    const num = result[i]
    console.log(Math.floor(num / 60), num % 60)
}