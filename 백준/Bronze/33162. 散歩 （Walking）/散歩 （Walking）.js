const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

if(input % 2){
    console.log(3 + Math.floor(input/2))
}
else{
    console.log(input/2)
}