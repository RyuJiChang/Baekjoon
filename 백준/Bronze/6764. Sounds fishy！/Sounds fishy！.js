const [a,b,c,d] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

if(a < b && b < c && c < d){
    console.log('Fish Rising')
}
else if(a > b && b > c && c > d){
    console.log('Fish Diving')
}
else if(a == b && b == c && c == d){
    console.log('Fish At Constant Depth')
}
else{
    console.log('No Fish')
}