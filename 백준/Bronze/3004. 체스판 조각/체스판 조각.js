let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

if(input%2){
    console.log((1+Math.floor(input/2))*(2+Math.floor(input/2)))
}
else{
    console.log((1+input/2)**2)
}