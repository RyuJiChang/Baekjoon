const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    let [x, y, z] = input[i].split(' ')
    if(x == 'S'){
        result.push(3.14159 * 4 / 3 *(Number(y)**3))
    }
    else if(x == 'L'){
        result.push(3.14159 * Number(z) * (Number(y)**2))
    }
    else{
        result.push(3.14159 / 3 * Number(z) * (Number(y)**2))
    }
}

console.log(Math.max(...result).toFixed(3))