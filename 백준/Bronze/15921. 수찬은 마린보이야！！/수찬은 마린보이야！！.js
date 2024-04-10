const input = require('fs').readFileSync('/dev/stdin', 'utf-8')[0];
if(input === '0'){
    console.log('divide by zero')
}
else{
    console.log('1.00')
}