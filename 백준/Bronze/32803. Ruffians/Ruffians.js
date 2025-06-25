const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

for(let i = 1 ; i < input.length ; i+=2){
    let result = 'NO'
    for(let j = 0 ; j < input[i].length ; j++){
        for(let k = 0 ; k < input[i].length ; k++){
            if(j != k && input[i][j] == input[i+1][k]){
                result = 'YES'
            }
        }
    }
    console.log(result)
}