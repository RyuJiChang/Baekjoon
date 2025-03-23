const [x,y] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
if(x <= 50 &&  y <= 10){
    console.log('White')
}
else if(y > 30){
    console.log('Red')
}
else{
    console.log('Yellow')
}