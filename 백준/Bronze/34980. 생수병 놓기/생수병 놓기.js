const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const a = input[1].split('').filter(el => el == 'w').length
const b = input[2].split('').filter(el => el == 'w').length

if(a > b){
    console.log('Oryang')
}
else if(a < b){
    console.log('Manners maketh man')
}
else if(input[1] == input[2]){
    console.log('Good')
}
else if(a == b){
    console.log('Its fine')
}