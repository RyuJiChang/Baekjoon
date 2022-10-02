function solution(expression) {
    let arr = expression.split('+').join(' + ').split('*').join(' * ').split('-').join(' - ').split(' ')
    let answer = []
    let strs = ["+-*","+*-","*-+","*+-","-*+","-+*"]
    for(let i = 0 ; i < strs.length ; i++){
        answer.push(Math.abs(computing(arr,strs[i])))
    }
    return Math.max(...answer)
}
function computing(arr, str){
    let one = [Number(arr[0])]
    for(let i = 2 ; i < arr.length ; i+=2){
        if(arr[i-1] === str[0]){
            one[one.length-1] = eval(`${one[one.length-1]}${str[0]}${arr[i]}`)
        }
        else{
            one.push(arr[i-1])
            one.push(Number(arr[i]))
        }
    }
    
    let two = [one[0]]
    for(let i = 2 ; i < one.length ; i+=2){
        if(one[i-1] === str[1]){
            two[two.length-1] = eval(`${two[two.length-1]}${str[1]}${one[i]}`)
        }
        else{
            two.push(one[i-1])
            two.push(Number(one[i]))
        }
    }
    
    let three = [two[0]]
    for(let i = 2 ; i < two.length ; i+=2){
        if(two[i-1] === str[2]){
            three[three.length-1] = eval(`${three[three.length-1]}${str[2]}${two[i]}`)
        }
        else{
            three.push(two[i-1])
            three.push(Number(two[i]))
        }
    }
    
    return three[0]
}