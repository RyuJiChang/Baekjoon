function solution(nums) {
    var answer = Math.min(nums.length/2,[...new Set(nums)].length)
    return answer;
}