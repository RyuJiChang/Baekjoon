const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim();
console.log(input[0] === '0' ? 'divide by zero' : '1.00');
