const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const result = []

for(let i = 0 ; i < input.length - 1; i++){
    const map = {}
    for(let j = i+1 ; j <= i + input[i][0] ; j++){
        for(let k = 0 ; k < input[j].length ; k++){
            map[input[j][k]] = 1
        }
    }
    console.log(Object.values(map).length == 49 ? 'Yes' : 'No')
    i+=input[i][0]
}