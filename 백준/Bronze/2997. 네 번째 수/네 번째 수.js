let [a,b,c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).sort((a,b) => a-b)

if(b-a === c-b){
    console.log(b+c-a)
}
else{
    console.log(a+c-b)
}