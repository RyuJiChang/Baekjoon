const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1)[0].split(' ').map(Number)
let Y = 0
let M = 0
for(let i = 0 ; i < input.length ; i++){
    Y += Math.ceil((input[i]+1)/30)*10
    M += Math.ceil((input[i]|1)/60)*15
}
if(Y === M){
    console.log('Y','M',Y)
}
else if(Y < M){
    console.log('Y', Y)
}
else{
    console.log('M',M)
}