const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const map = {'C' : 0, 'S' : 0, 'I' : 0, 'A' : 0}
const friends = input[1].split(' ')

for(let i = 0 ; i < friends.length ; i++){
    if(map[friends[i]] != null){
        map[friends[i]]++
    }
}

console.log(map[input[2]])