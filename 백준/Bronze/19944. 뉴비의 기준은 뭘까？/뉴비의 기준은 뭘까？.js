const [m, grade] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

if(grade == 1 || grade == 2){
    console.log('NEWBIE!')
}
else if(grade <= m){
    console.log('OLDBIE!')
}
else{
    console.log('TLE!')
}