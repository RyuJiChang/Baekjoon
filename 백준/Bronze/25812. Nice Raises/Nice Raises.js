const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const raise = input[0].split(' ').map(Number)[1]
let result = 0

for(let i = 1 ; i < input.length ; i++){
    const salary = Number(input[i])
    if(salary >= raise){
        result++
    }
    if(salary <= raise){
        result--
    }
}

if(result == 0){
    console.log(0)
}
else if(result > 0){
    console.log(2)
}
else{
    console.log(1)
}