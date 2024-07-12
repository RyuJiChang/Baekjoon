const [a,b,c,d] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

if((a == 9 || a == 8) && (d == 9 || d == 8) && b == c){
    console.log('ignore')
}
else{
    console.log('answer')
}