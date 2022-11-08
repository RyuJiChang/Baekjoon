let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []
let [a1,a2,b1,b2] = input[0].split(' ').map(Number)
let times = input[1].split(' ').map(Number)
for(let i = 0 ; i < 3 ; i++){
    let attacked = 0
    if(times[i]%(a1+a2) > a1 || times[i]%(a1+a2) === 0){
    }
    else{
        attacked++
    }
    if(times[i]%(b1+b2) > b1 || times[i]%(b1+b2) === 0){
    }
    else{
        attacked++
    }
    result.push(attacked)
}

console.log(result.join('\n'))