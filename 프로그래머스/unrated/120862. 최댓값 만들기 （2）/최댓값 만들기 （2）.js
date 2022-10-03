function solution(numbers) {
    let a = numbers.length
    numbers.sort((a,b)=> a-b)
    return Math.max(numbers[0]*numbers[1] , numbers[a-1]*numbers[a-2])
}

