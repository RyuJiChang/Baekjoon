const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const x = Math.ceil(Math.sqrt(input))
const y = Math.floor(Math.sqrt(input))

if(x*y < input){
    console.log(Math.max((x-1)*4,4))
}
else{
    console.log(Math.max((x+y-2)*2,4))
}