function solution(age) {
    return String(age).split('').map(el => 'abcdefghij'[Number(el)]).join('')
}