let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []
for(let i = 1 ; i < input.length ; i++){
    let [a,b,c] = input[i].split(' ').map(Number)
    if(a+c < b){
        result.push('advertise')
    }
    else if(a+c > b){
        result.push('do not advertise')
    }
    else{
        result.push('does not matter')
    }
}

console.log(result.join('\n'))