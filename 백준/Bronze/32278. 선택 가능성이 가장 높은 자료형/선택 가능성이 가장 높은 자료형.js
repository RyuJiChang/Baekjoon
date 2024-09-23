const input = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim())

if(input >= -32768n && input <= 32767n){
    console.log('short')
}
else if(input >= -2147483648n && input <= 2147483647n){
    console.log('int')
}
else{
    console.log('long long')
}