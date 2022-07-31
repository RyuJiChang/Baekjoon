const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
if(input[0].indexOf(input[1]) === -1){
    console.log('no')
}
else{
    console.log('go')
}