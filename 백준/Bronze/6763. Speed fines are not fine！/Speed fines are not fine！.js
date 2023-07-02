const [limit, speed] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

if(speed <= limit){
    console.log('Congratulations, you are within the speed limit!')
}
else if(speed <= limit + 20){
    console.log('You are speeding and your fine is $100.')
}
else if(speed <= limit + 30){
    console.log('You are speeding and your fine is $270.')
}
else{
    console.log('You are speeding and your fine is $500.')
}