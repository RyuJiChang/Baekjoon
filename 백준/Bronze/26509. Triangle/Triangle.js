const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number).sort((a,b) => a-b))
const result = []

for(let i = 1 ; i < input.length ; i+=2){
    const [x,y,z] = input[i]
    const [x2,y2,z2] = input[i+1]
    if((x == x2) && (y == y2) && (z == z2) && (x**2 + y**2 == z**2)){
        result.push('YES')
    }
    else{
        result.push('NO')
    }
}
console.log(result.join('\n'))