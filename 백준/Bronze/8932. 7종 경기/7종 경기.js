const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const scoreBoard = [
    [9.23076, 26.7, 1.835, '트랙'],
    [1.84523, 75, 1.348, '필드'],
    [56.0211, 1.5, 1.05, '필드'],
    [4.99087, 42.5, 1.81, '트랙'],
    [0.188807, 210, 1.41, '필드'],
    [15.9803, 3.8, 1.04, '필드'],
    [0.11193, 254, 1.88, '트랙']
]

const result = []

for(let i = 1 ; i < input.length ; i++){
    let score = 0
    const arr = input[i].split(' ').map(Number)
    for(let j = 0 ; j < arr.length ; j++){
        if(scoreBoard[j][3] === '트랙'){
            score += Math.floor(scoreBoard[j][0] * (scoreBoard[j][1] - arr[j])**scoreBoard[j][2])
        }
        else{
            score += Math.floor(scoreBoard[j][0] * (arr[j] - scoreBoard[j][1])**scoreBoard[j][2])
        }
    }
    result.push(score)
}

console.log(result.join('\n'))