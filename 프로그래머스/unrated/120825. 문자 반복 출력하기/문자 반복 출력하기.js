function solution(my_string, n) {
    return my_string.split('').map(el => el.repeat(n)).join('')
}