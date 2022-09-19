function solution(numbers) {
    return (Number(numbers.sort((a,b) => Number(String(b) + String(a))- Number(String(a) + String(b))).join('')) === 0 ? "0":numbers.sort((a,b) => Number(String(b) + String(a))- Number(String(a) + String(b))).join(''))
}