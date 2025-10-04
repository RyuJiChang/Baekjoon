const [a,b,c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).sort((a,b) => a-b)

if(a == b && b == c){
    console.log(2)
}
else if((a**2 + b**2) == c**2){
    console.log(1)
}
else{
    console.log(0)
}