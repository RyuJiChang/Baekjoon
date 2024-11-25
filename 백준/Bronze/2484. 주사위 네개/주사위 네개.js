const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let max = 0

for(let i = 1 ; i < input.length ; i++){
    const dice = {1 : 0, 2 : 0, 3 : 0, 4 : 0, 5 : 0, 6 : 0}
    const [a,b,c,d] = input[i].sort((a,b) => b - a)
    for(let j = 0 ; j < 4 ; j++){
        dice[input[i][j]]++
    }

    const diceList = Object.values(dice).sort((a,b) => b - a)

    if(diceList[0] == 4){
        max = Math.max(max, 50000 + 5000 * a)
    }
    else if(diceList[0] == 3){
        if(a == b){
            max = Math.max(max, 10000 + 1000 * a)
        }
        else{
            max = Math.max(max, 10000 + 1000 * b)
        }
    }
    else if(diceList[0] == 2 && diceList[1] == 2){
        max = Math.max(max, 2000 + 500 * (a + c))
    }
    else if(diceList[0] == 2){
        if(a == b){
            max = Math.max(max, 1000 + 100 * a)
        }
        else if(b == c){
            max = Math.max(max, 1000 + 100 * b)
        }
        else{
            max = Math.max(max, 1000 + 100 * c)
        }
    }
    else{
        max = Math.max(max, a * 100)
    }

}

console.log(max)