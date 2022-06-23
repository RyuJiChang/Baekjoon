const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
function getnum(e){
    let b = Math.floor(Math.sqrt(e))
    if( e === b**2){
        console.log(b+b-1)
    }
    else if(e <= b**2 + b){
        console.log(b+b)
    }
    else{
        console.log(b+b+1)
    }
}
    
for(let i = 1 ; i < input.length ; i++){
    let distanceArr = input[i].split(' ').map(Number)
    let distance = distanceArr[1] - distanceArr[0]
     getnum(distance)
}