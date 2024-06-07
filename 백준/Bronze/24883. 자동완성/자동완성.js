const input = require('fs').readFileSync('/dev/stdin').toString().trim()

if(input == 'n' || input == 'N'){
    console.log('Naver D2')
}
else{
    console.log('Naver Whale')
}