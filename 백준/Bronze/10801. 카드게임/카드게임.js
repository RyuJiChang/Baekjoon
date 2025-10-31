const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let point = 0

for(let i = 0 ; i < 10 ; i++){
    if(input[0][i] > input[1][i]){
        point++
    }
    else if(input[0][i] < input[1][i]){
        point--
    }
}

if(point > 0){
    console.log('A')
}
else if(point < 0){
    console.log('B')
}
else{
    console.log('D')
}