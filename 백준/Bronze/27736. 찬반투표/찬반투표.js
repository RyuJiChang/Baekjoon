const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ')
const count = {'-1' : 0, '0' : 0, '1' : 0}

for(let i = 0 ; i < input.length ; i++){
    count[input[i]]++
}

if(input.length / 2 <= count[0]){
    console.log('INVALID')
}
else if(count[1] <= count[-1]){
    console.log('REJECTED')
}
else{
    console.log('APPROVED')
}