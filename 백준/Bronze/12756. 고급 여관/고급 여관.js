let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

while(input[0][1] > 0 && input[1][1] > 0){
    input[0][1] -= input[1][0]
    input[1][1] -= input[0][0]
}

if(input[0][1] > 0){
    console.log('PLAYER A')
}
else if(input[1][1] > 0){
    console.log('PLAYER B')
}
else{
    console.log('DRAW')
}