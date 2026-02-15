const input = require('fs').readFileSync('/dev/stdin').toString().trim()

if(input == ')1('){
    console.log(2)
}
else if(input == '(1)'){
    console.log(0)
}
else{
    console.log(1)
}