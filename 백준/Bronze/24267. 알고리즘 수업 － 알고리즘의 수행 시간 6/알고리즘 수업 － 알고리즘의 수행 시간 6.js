const input = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim())

if(input < 3n){
    console.log(0)
}
else{
    console.log(String(input * (input-1n) * (input-2n) / 6n))
}

console.log(3)