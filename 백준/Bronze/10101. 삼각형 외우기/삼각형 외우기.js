const [a,b,c] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let result = 'Error'
if(a == b && b == c && c == 60){
    result = 'Equilateral'
}
else if(a + b + c != 180){
}
else if(a == b || b == c || a == c){
    result = 'Isosceles'
}
else{
    result = 'Scalene'
}

console.log(result)