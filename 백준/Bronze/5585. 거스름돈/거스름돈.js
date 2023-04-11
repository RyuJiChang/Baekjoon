const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let money = 1000 - input
let count = 0

if(money >= 500){
    money -= 500
    count++
}
if(money >= 100){
    count += Math.floor(money/100)
    money = money % 100
}
if(money >= 50){
    count += Math.floor(money/50)
    money = money % 50
}
if(money >= 10){
    count += Math.floor(money/10)
    money = money % 10
}
if(money >= 5){
    count += Math.floor(money/5)
    money = money % 5
}
count += money

console.log(count)