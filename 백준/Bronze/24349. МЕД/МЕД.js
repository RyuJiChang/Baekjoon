const [times, a, b, c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
let result
if(c < Math.min(a,b)){
    if(times > 1){
        result = Math.min(a,b) + (times-2)*c
        console.log(Math.floor(result/100), result%100)
    }
    else{
        console.log(0, 0)
    }
}
else{
    result = (times-1) * Math.min(a,b)
    console.log(Math.floor(result/100), result%100)
}