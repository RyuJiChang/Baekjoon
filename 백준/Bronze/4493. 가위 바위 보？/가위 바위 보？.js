let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let arr = []
let result = []

for(let i = 1 ; i < input.length ; i++){
    arr.push(input.slice(i+1,i+1+Number(input[i])))
    i += Number(input[i])
}

for(let i = 0 ; i < arr.length ; i++){
    let a = 0
    let b = 0
    for(let j = 0 ; j < arr[i].length ; j++){
        if(arr[i][j] === 'S R'){
            b += 1
        }
        else if(arr[i][j] === 'S P'){
            a += 1
        }
        else if(arr[i][j] === 'R S'){
            a += 1
        }
        else if(arr[i][j] === 'R P'){
            b += 1
        }
        else if(arr[i][j] === 'P S'){
            b += 1
        }        
        else if(arr[i][j] === 'P R'){
            a += 1
        }
    }
    if(a>b){
        result.push('Player 1')
    }
    else if(a<b){
        result.push('Player 2')
    }
    else{
        result.push('TIE')
    }
}
console.log(result.join('\n'))