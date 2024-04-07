const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const numCheck = {first : 0, soft : 0, embedded : 0, gpt : 0}

for(let i = 1 ; i < input.length ; i++){
    const [year, classNum, x] = input[i].split(' ')
    if(year == 1){
        numCheck.first++
    }
    else if(classNum == 1 || classNum == 2){
        numCheck.soft++
    }
    else if(classNum == 3){
        numCheck.embedded++
    }
    else{
        numCheck.gpt++
    }
}
console.log(numCheck.soft)
console.log(numCheck.embedded)
console.log(numCheck.gpt)
console.log(numCheck.first)