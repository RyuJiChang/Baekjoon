const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
let result = input[0]
if(input[0][1] == input[1][0]){
    result += `'` + input[1][1]
}
else{
    result += input[1]
}

if(input[1][1] == input[2][0]){
    result += `'` + input[2][1]
}
else{
    result += input[2]
}

console.log(result)