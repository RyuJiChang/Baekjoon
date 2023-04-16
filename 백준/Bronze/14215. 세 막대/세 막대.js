const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).sort((a,b) => a-b)


if(input[0] + input[1] <= input[2]){
    console.log((input[0]+input[1])*2 -1)
}
else{
    console.log(input[0] + input[1] + input[2])
}