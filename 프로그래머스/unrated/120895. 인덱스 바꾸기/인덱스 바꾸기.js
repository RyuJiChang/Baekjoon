function solution(my_string, num1, num2) {
    let a = my_string[num1]
    let b = my_string[num2]
    let arr = my_string.split('')
    arr.splice(num1,1,b)
    arr.splice(num2,1,a)
    return arr.join('')
}