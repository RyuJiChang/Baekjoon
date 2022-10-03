function solution(my_string) {
    return my_string.split('').filter(el => '123456789'.includes(el)).map(Number).reduce((a,b) => a+b)
}