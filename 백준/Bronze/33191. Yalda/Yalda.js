const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

if(input[0] >= input[1]){
    console.log('Watermelon')
}
else if(input[0] >= input[2]){
    console.log('Pomegranates')
}
else if(input[0] >= input[3]){
    console.log('Nuts')
}
else{
    console.log('Nothing')
}