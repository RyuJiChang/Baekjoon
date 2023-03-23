const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

if(input < 199){
    console.log(199-input)
}
else{
    console.log(0)
}