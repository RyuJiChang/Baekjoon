const [x,y,z] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

if(x >= 1000 && (y >= 8000 || z >= 260)){
    console.log('Very Good')
}
else if(x >= 1000){
    console.log('Good')
}
else{
    console.log('Bad')
}