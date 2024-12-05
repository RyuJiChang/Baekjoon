const input = require('fs').readFileSync('/dev/stdin').toString().trim()
const map = {
    'fdsajkl;' : 'in-out',
    'jkl;fdsa' : 'in-out',
    'asdf;lkj' : 'out-in',
    ';lkjasdf' : 'out-in',
    'asdfjkl;' : 'stairs',
    ';lkjfdsa' : 'reverse'
}

console.log(map[input] ? map[input] : 'molu')