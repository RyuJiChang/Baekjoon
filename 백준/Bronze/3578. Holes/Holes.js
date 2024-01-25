const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
if(input == 0){
    console.log(1)
}
else if(input == 1){
    console.log(0)
}
else if(input%2){
    console.log('4' + '8'.repeat(Math.floor(input/2)))
}
else{
    console.log('8'.repeat(input/2))
}