let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []
for(let i = 0 ; i < input.length ; i++){
    if(input[i].includes("FBI")){
        result.push(i+1)
    }
}

console.log(result.length ? result.join(' ') : `HE GOT AWAY!`)