function solution(numbers, direction) {
    if(direction === 'right'){
        numbers.unshift(numbers.pop())
        return numbers
    }
    else{
        numbers.push(numbers.shift())
        return numbers
    }
}