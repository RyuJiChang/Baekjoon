const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const result = []
const greadeCheck = (n) => {
    if(n <= 4){
        return 1
    }
    else if(n <= 11){
        return 2
    }
    else if(n <= 23){
        return 3
    }
    else if(n <= 40){
        return 4
    }
    else if(n <= 60){
        return 5
    }
    else if(n <= 77){
        return 6
    }
    else if(n <= 89){
        return 7
    }
    else if(n <= 96){
        return 8
    }
    else{
        return 9
    }
}

for(let i = 0 ; i < input[1].length ; i++){
    result.push(greadeCheck(Math.floor(input[1][i] * 100 / input[0][0])))
}

console.log(result.join(' '))