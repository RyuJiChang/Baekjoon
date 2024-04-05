const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const dataList = input[1].split('security').join('S').split('bigdata').join('B')

let bigdataCount = 0
let securityCount = 0
for(let i = 0 ; i < dataList.length ; i++){
    if(dataList[i] == 'B'){
        bigdataCount++
    }
    else{
        securityCount++
    }
}

if(bigdataCount > securityCount){
    console.log('bigdata?')
}
else if(bigdataCount == securityCount){
    console.log('bigdata? security!')
}
else{
    console.log('security!')
}