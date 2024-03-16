let [yt, yj] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
let ytTurn = true

while(yt < 5 && yj < 5){
    if(ytTurn){
        yj += yt
    }
    else{
        yt += yj
    }
    ytTurn = !ytTurn
}

console.log(yt < yj ? 'yt' : 'yj')
