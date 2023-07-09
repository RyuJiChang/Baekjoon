const [month, day] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
if(month < 2){
    console.log('Before')
}
else if(month === 2 && day < 18){
    console.log('Before')
}
else if(month === 2 && day === 18){
    console.log('Special')
}
else{
    console.log('After')
}
