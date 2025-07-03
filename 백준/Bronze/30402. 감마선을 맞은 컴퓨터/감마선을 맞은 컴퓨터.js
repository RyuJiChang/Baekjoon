const input = require('fs').readFileSync('/dev/stdin').toString().trim()

if(input.indexOf('w') != -1){
    console.log('chunbae')
}
else if(input.indexOf('b') != -1){
    console.log('nabi')
}
else{
    console.log('yeongcheol')
}