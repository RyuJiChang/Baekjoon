const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const list = ['Soongsil', 'Korea', 'Hanyang']
const min = Math.min(...input)
if(input[0] + input[1] + input[2] >= 100){
    console.log('OK')
}
else if(input[0] == min){
    console.log(list[0])
}
else if(input[1] == min){
    console.log(list[1])
}
else{
    console.log(list[2])
}