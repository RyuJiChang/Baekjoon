const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('/').map(Number)

if(input[0] <= 12 && input[1] <= 12){
    console.log('either')
}
else if(input[0] > 12){
    console.log('EU')
}
else{
    console.log('US')
}