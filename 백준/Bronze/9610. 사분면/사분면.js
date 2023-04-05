const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const dots = new Array(5).fill(0)
for(let i = 1 ; i < input.length ; i++){
    const [x, y] = input[i].split(' ').map(Number)
    if(x === 0 || y === 0){
        dots[0]++
    }
    else if(x > 0 && y > 0){
        dots[1]++
    }
    else if(x < 0 && y > 0){
        dots[2]++
    }
    else if(x > 0 && y < 0){
        dots[4]++
    }
    else if(x < 0 && y < 0){
        dots[3]++
    }
    
}
for(let i = 1 ; i <= 4 ; i++){
    console.log(`Q${i}: ${dots[i]}`)
}
console.log(`AXIS: ${dots[0]}`)