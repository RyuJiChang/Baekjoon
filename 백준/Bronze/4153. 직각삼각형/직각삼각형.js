const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
for(let i = 0 ; i < input.length-1 ; i++){
    let a = input[i].split(' ').map(Number)[0]
    let b = input[i].split(' ').map(Number)[1]
    let c = input[i].split(' ').map(Number)[2]
    if(a**2 + b**2 === c**2 || a**2 + c**2 === b**2 || b**2 + c**2 === a**2){
       console.log('right')
       }
       else{
           console.log('wrong')
       }
}