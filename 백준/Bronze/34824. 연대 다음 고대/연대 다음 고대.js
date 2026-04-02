const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

console.log(input.indexOf('yonsei') < input.indexOf('korea') ? 'Yonsei Won!' : 'Yonsei Lost...')