let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).filter(el => el%2)

if(input.length === 0){
    console.log(-1)
}
else{
console.log(`${input.reduce((a,b) => a+b)}\n${Math.min(...input)}`)   
}