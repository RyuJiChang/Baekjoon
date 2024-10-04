const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(':').map(Number))

for(let i = 1 ; i < input.length ; i++){
    const clock = []
    let str1 = ''
    let str2 = ''
    for(let j = 0 ; j < input[i].length ; j++){
        clock.push(input[i][j].toString(2).padStart(6,'0'))
    }

    for(let a = 0 ; a < 6 ; a++){
        for(let b = 0 ; b < 3 ; b++){
            str1 += clock[b][a]
        }
    }

    for(let a = 0 ; a < 3 ; a++){
        for(let b = 0 ; b < 6 ; b++){
            str2 += clock[a][b]
        }
    }

    console.log(str1, str2)
}