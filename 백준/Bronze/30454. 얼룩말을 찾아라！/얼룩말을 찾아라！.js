const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const check = (str) => {
    let count = 0
    let now = '0'
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] == '1' && str[i] != now){
            count++
            now = '1'
        }
        else if(str[i] == '0'){
            now = '0'
        }
    }
    return count
}
const checkMap = {}

for(let i = 1 ; i < input.length ; i++){
    if(checkMap[check(input[i])]){
        checkMap[check(input[i])]++
    } 
    else{
        checkMap[check(input[i])] = 1
    }
}

console.log(Math.max(...Object.keys(checkMap)), checkMap[Math.max(...Object.keys(checkMap))])