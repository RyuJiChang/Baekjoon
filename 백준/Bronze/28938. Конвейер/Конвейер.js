const sum = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number).reduce((a,b) => a+b)

if(sum > 0){
    console.log('Right')
}
else if(sum == 0){
    console.log('Stay')
}
else{
    console.log('Left')
}