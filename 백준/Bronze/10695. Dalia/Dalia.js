const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

for(let i = 1 ; i < input.length ; i++){
    const [z,a,b,c,d] = input[i]
    const x = Math.abs(a - c)
    const y = Math.abs(b - d)
    if((x == 1 && y == 2) || (y == 1 && x == 2)){
        console.log(`Case ${i}: YES`)
    }else{
        console.log(`Case ${i}: NO`)
    }
}

