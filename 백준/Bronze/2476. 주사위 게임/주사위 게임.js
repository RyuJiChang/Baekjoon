let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1)

let max = 0
for(let i = 0 ; i < input.length ; i++){
    let [a,b,c] = input[i].split(' ').map(Number)
    if(a === b && b === c){
        max = Math.max(max,a*1000 + 10000)
    }
    else if( a === b || a === c){
        max = Math.max(max,a*100 + 1000)
    }
    else if(b === c){
        max = Math.max(max,b*100 + 1000)
    }
    else{
        max = Math.max(max, Math.max(a,b,c)*100)
    }
}
console.log(max)