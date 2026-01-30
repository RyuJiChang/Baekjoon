const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 0 ; i < input.length -1 ; i++){
    const member = input[i].length
    const abs = input[i].split('').filter(el => el == 'A').length
    const yes = input[i].split('').filter(el => el == 'Y').length
    const no  = input[i].split('').filter(el => el == 'N').length
    if((member / 2) <= abs){
        console.log('need quorum')
    }
    else if(yes > no){
        console.log('yes')
    }
    else if(yes < no){
        console.log('no')
    }
    else{
        console.log('tie')
    }
}