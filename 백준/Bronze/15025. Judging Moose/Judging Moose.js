const [x,y] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

if(x == y){
    if(x == 0){
        console.log('Not a moose')
    }
    else{
        console.log(`Even ${x + y}`)
    }
}
else{
    console.log(`Odd ${Math.max(x, y) * 2}`)
}