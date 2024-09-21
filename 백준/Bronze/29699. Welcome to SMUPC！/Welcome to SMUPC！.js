const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

console.log(`WelcomeToSMUPC`[(input - 1 )%14])