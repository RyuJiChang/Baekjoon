function solution(a, b) {
    let obj = {1:31,2:29,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31}
    let days = ["FRI","SAT","SUN","MON","TUE","WED","THU"]
    let sum = b-1
    for(let i = 1 ; i < a ; i++){
        sum += obj[i]
    }
    return days[sum%7];
}