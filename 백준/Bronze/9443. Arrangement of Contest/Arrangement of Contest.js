const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const checkMap = {}
let count = 0
for(let i = 1 ; i < input.length ; i++){
    checkMap[input[i][0]] = true
}
for(let i = 65 ; i < 91 ; i++){
    if(checkMap[String.fromCharCode(i)]){
        count++
    }
    else{
        break
    }
}

console.log(count)