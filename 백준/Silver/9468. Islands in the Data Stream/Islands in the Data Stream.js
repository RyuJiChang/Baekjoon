const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
let many = Number(input[0])
for(let i = 1 ; i <= many ; i++){
    let num = input[i].split(' ').map(Number)
    let result = 0
        for(let j = 1 ; j <= 15 ; j++){
            if(num[j] > num[j-1]){
                result += 1
            }
        }
    console.log(num[0],result)
}