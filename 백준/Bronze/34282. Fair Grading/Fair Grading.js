const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const point = input[0] + input[1] + input[2] * 2

if(point >= 360){
    console.log('A')
}
else if(point >= 320){
    console.log('B')
}
else if(point >= 280){
    console.log('C')
}
else if(point >= 240){
    console.log('D')
}
else{
    console.log('F')
}