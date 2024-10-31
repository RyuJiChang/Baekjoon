const [a,b,c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')

if(a ==b && b == c){
    console.log('*')
}
else if(a == b){
    console.log('C')
}
else if(a == c){
    console.log('B')
}
else if(b == c){
    console.log('A')
}