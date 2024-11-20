const [target, start, end] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

if(target <= start){
    console.log(start)
}
else if(target >= end){
    console.log(end)
}
else{
    console.log(target)
}