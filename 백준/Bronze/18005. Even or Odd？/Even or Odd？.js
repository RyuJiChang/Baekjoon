const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

if(input % 4 === 0){
    console.log(2)
}
else if(input % 2 === 1){
    console.log(0)
}
else{
    console.log(1)
}