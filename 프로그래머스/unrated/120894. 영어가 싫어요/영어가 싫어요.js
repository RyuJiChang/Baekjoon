function solution(numbers) {
    let arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    return Number(numbers.split(arr[0]).join(0).split(arr[1]).join(1).split(arr[2]).join(2).split(arr[3]).join(3).split(arr[4]).join(4).split(arr[5]).join(5).split(arr[6]).join(6).split(arr[7]).join(7).split(arr[8]).join(8).split(arr[9]).join(9))
}