const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

if((input[0] == 1 || input[0] == 3) && (input[1] == 6 || input[1] == 8) && (input[2] == 2 || input[2] == 5)){
    console.log('JAH')
}
else{
    console.log('EI')
}