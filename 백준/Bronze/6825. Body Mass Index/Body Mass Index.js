const [weight, height] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const BMI = weight / height / height

if(BMI > 25){
    console.log('Overweight')
}
else if(BMI >= 18.5){
    console.log('Normal weight')
}
else{
    console.log('Underweight')
}