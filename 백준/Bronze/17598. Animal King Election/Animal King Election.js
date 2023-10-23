const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let Tiger = 0
let Lion = 0

for(let i = 0 ; i < input.length ; i++){
    if(input[i] == 'Tiger'){
        Tiger++
    }
    else{
        Lion++
    }
}

if(Tiger > Lion){
    console.log('Tiger')
}
else{
    console.log('Lion')
}