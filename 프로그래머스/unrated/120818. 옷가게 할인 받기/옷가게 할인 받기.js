function solution(price) {
    if(price < 100000) return price
    if(price < 300000) return Math.floor(price*0.95)
    if(price < 500000) return Math.floor(price*0.9)
    return Math.floor(price*0.8);
}