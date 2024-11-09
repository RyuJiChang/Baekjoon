const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const sevenCheck = input.includes('7')
let result = '3'

if(!sevenCheck && input% 7 > 0){
    result = 0
}
else if(!sevenCheck && input% 7 == 0){
    result = 1
}
else if(sevenCheck && input % 7 > 0){
    result = 2
}
else{
    result = 3
}

console.log(result)