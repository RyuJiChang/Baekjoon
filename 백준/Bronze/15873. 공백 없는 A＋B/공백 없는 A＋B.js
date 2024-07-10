const input = require('fs').readFileSync('/dev/stdin').toString().trim()

if(input.length == 4){
    console.log(20)
}
else if(input.length == 3 && input[1] == '0'){
    console.log(10 + Number(input[2]))
}
else if(input.length == 3){
    console.log(10 + Number(input[0]))
}
else{
    console.log(Number(input[0]) + Number(input[1]))
}