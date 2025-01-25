const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let result = Number(input[input.length - 1])

for(let i = 1 ; i < input.length - 1 ; i++){
    const [start, way, length] = input[i].split(' ')

    if(way == 'R'){
        result += Number(length)
    }
    else{
        result -= Number(length)
    }
}

console.log(result)