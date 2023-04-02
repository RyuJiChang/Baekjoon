const [length, str] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let A = 0
let B = 0
for(let i = 0 ; i < str.length ; i++){
    if(str[i] === 'A'){
        A++
    }
    else{
        B++
    }
}

if(A > B){
    console.log('A')
}
else if(B > A){
    console.log('B')
}
else{
    console.log('Tie')
}