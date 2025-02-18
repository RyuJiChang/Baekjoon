const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const result = []

for(let i = 1 ; i < input.length ; i++){
    let sumA = 0
    let sumB = 0
    for(let j = 0 ; j < input[i].length ; j+=2){
        const [x, y] = input[i].slice(j,j+2)
        let point = 0
        if((x**2 + y**2) <= 9){
            point = 100
        }
        else if((x**2 + y**2) <= 36){
            point = 80
        }
        else if((x**2 + y**2) <= 81){
            point = 60
        }
        else if((x**2 + y**2) <= 144){
            point = 40
        }
        else if((x**2 + y**2) <= 225){
            point = 20
        }
        
        if(j < 5){
            sumA += point
        }
        else{
            sumB += point
        }
    }

    result.push(`SCORE: ${sumA} to ${sumB}, ${sumA == sumB ? 'TIE' : `PLAYER ${sumA > sumB ? 1 : 2} WINS`}.`)
}

console.log(result.join('\n'))