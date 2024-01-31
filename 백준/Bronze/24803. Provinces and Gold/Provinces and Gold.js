const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const power = input[0] * 3 + input[1] * 2 + input[2] * 1
if(power >= 8){
    console.log('Province or Gold')
}
else if(power >= 6){
    console.log('Duchy or Gold')
}
else if(power >= 5){
    console.log('Duchy or Silver')
}
else if(power >= 3){
    console.log('Estate or Silver')
}
else if(power >= 2){
    console.log('Estate or Copper')
}
else{
    console.log('Copper')
}