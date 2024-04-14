const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const strMap = {}
let result = []
for(let i = 1 ; i < input.length ; i++){
    if(strMap[input[i].slice(0,1)]){
        strMap[input[i].slice(0,1)]++
    } 
    else{
        strMap[input[i].slice(0,1)] = 1
    }
}

for(let key in strMap){
    if(strMap[key] >= 5){
        result.push(key)
    }
}

console.log(result.length > 0 ? result.sort().join('') : 'PREDAJA')