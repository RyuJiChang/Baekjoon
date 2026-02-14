const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
if(input.length == 1 && input[0] == ''){
    console.log(0)
}
else{
    console.log(input.length)
}