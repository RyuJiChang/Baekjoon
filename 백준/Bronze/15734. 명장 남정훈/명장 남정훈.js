const [left, right, all] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

let gap = Math.abs(left-right)

if(gap > all){
    console.log((Math.min(left, right) + all)*2)
}
else if((all-gap)%2){
    console.log(Math.max(left, right)*2 + all-gap -1)
}
else{
    console.log(Math.max(left, right)*2 + all-gap)
}