const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
if(input === 1){
    console.log(0)
}
else{
let result = 2
for(let i = 2 ; i < input ; i++){
    result*=3
}
    console.log(result)
}