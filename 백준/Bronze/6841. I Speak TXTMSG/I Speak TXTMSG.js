const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const emozi = {
    'CU': 'see you',
    ':-)': 'I’m happy',
    ':-(': 'I’m unhappy',
    ';-)': 'wink',
    ':-P': 'stick out my tongue',
    '(~.~)': 'sleepy',
    'TA': 'totally awesome',
    'CCC': 'Canadian Computing Competition',
    'CUZ': 'because',
    'TY': 'thank-you',
    'YW': 'you’re welcome',
    'TTYL': 'talk to you later'
}
const result = []

for(let i = 0 ; i < input.length ; i++){
    result.push(emozi[input[i]] != null ? emozi[input[i]] : input[i])
}

console.log(result.join('\n'))