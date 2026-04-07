const input = require('fs').readFileSync('/dev/stdin').toString().trim()
console.log('SciCom'.repeat(input.split('S').length - 1) + 'Love'.repeat(input.split('L').length - 1))