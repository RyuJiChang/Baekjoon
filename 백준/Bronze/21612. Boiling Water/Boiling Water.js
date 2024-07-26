const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

console.log(100 - (100-input) * 5)
if(input == 100){
    console.log(0)
}
else{
    console.log(input > 100 ? -1 : 1)
}