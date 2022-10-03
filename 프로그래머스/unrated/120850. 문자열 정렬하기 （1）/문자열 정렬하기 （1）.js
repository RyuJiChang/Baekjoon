function solution(my_string) {
    let num = '0123456789'
    return my_string.split('').filter(el => num.includes(el)).map(Number).sort((a,b) => a-b)
}