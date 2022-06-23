const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const moum = ['a', 'e', 'i', 'o', 'u' , 'A', 'E', 'I', 'O', 'U']
for(let i = 0 ; i < input.length - 1 ; i++){
    let num = 0;
    for(let j = 0 ; j < input[i].length ; j++){
        if(moum.includes(input[i][j])){
            num += 1
        }
    }
    console.log(num)
}