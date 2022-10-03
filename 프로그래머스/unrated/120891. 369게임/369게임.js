function solution(order) {
    return String(order).split('').filter(el => '369'.includes(el)).length
}