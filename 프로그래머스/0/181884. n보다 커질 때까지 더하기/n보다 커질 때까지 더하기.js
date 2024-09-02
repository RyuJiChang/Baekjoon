function solution(numbers, n) {
    let sum = 0
    let index = 0
    while(sum <= n && index < numbers.length){
        sum += numbers[index]
        index++
    }
    return sum
}