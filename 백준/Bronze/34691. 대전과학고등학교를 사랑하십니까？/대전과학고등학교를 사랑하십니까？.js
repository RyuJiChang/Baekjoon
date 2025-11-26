const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const map = {
    'animal' : 'Panthera tigris',
    'flower' : 'Forsythia koreana',
    'tree' : 'Pinus densiflora'
}

for(let i = 0 ; i < input.length - 1 ; i++){
    console.log(map[input[i]])
}