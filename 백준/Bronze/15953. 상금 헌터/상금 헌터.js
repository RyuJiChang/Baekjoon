const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

const result = []

for(let i = 1 ; i < input.length ; i++){
    const [scoreA, scoreB] = input[i]
    let reward = 0
    if(scoreA === 0){
        reward += 0
    }
    else if(scoreA < 2){
        reward += 5000000
    }
    else if(scoreA < 4){
        reward += 3000000
    }
    else if(scoreA < 7){
        reward += 2000000
    }
    else if(scoreA < 11){
        reward += 500000
    }
    else if(scoreA < 16){
        reward += 300000
    }
    else if(scoreA < 22){
        reward += 100000
    }

    if(scoreB === 0){
        reward += 0
    }
    else if(scoreB < 2){
        reward += 5120000
    }
    else if(scoreB < 4){
        reward += 2560000
    }
    else if(scoreB < 8){
        reward += 1280000
    }
    else if(scoreB < 16){
        reward += 640000
    }
    else if(scoreB < 32){
        reward += 320000
    }
    result.push(reward)
}

console.log(result.join('\n'))