const input = require('fs').readFileSync('/dev/stdin').toString().trim()

if(input[0] == '0'){
    if(input[1] == 'x'){
        console.log(parseInt(input, 16))
    }
    else{
        console.log(parseInt(input, 8))
    }
}
else{
    console.log(input)
}