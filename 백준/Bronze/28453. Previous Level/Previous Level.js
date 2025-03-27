const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)
const result = []

for(let i = 0 ; i < input.length ; i++){
    const num = input[i]
    let str
    if(num == 300){
        str = 1
    }
    else if(num >= 275){
        str = 2
    }
    else if(num >= 250){
        str = 3
    }
    else{
        str = 4
    }
    result.push(str)
}

console.log(result.join(' '))