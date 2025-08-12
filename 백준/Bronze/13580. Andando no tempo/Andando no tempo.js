const [a,b,c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).sort((a,b) => a-b)

if(a ==b || b == c || a+b == c){
    console.log('S')
}
else{
    console.log('N')
}