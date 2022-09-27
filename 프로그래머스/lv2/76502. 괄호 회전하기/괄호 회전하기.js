function solution(s) {
    var answer = 0;
    for(let i = 0 ; i < s.length ; i++){
        if(check(s.slice(i) + s.slice(0,i))){
            answer++
        }
    }
    return answer
}
    function check(str) {
      const stack = [];
      const opener = {
        '{': '}',
        '[': ']',
        '(': ')',
      };
      const closer = '}])';
      for (let i = 0; i < str.length; i++) {
        if (str[i] in opener) {
          stack.push(str[i]);
        } else if (closer.includes(str[i])) {
          const top = stack.pop();
          const pair = opener[top];
          if (pair !== str[i]) {
            return false;
          }
        }
      }
      return stack.length === 0;
    };