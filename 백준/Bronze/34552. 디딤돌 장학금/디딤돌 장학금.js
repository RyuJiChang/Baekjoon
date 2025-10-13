const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

const M = input[0]; // 분위별 장학금
const N = input[1][0]; // 학생 수
let result = 0;

for (let i = 2; i < 2 + N; i++) {
  const [B, L, S] = input[i];
  if (L >= 2.0 && S >= 17) {
    result += M[B];
  }
}

console.log(result);