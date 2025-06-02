const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(el => el.split('').sort().join('')))

for(let i = 1 ; i < input.length ; i++){
    if(input[i][0] == input[i][1]){
        console.log('Possible')
    }
    else{
        console.log('Impossible')
    }
}