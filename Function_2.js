// 메소드
a = {
  b:function() {

  }
}

// 다른 함수의 인자로 전달
function cal_st(func, num) {
  return func(num)
}

function increase(num) {
  return num + 1
}

function decrease(num) {
  return num - 1
}

// 함수의 리턴 값으로 사용
function cal_nd(mode) {
  let funcs = {
    'plus' : function(left, right) { return left + right },
    'minus' : function(left, right) { return left - right }
  }
  return funcs[mode];
}

// 배열의 값으로 사용

let process = [
  function(input) { return input + 10; },
  function(input) { return input * input; },
  function(input) { return input / 2; }
];

let input = 1;

for (var i = 0; i < process.length; i++) {
  input = process[i] (input);
}

console.log(cal_st(increase, 1));       // 2
console.log(cal_st(decrease, 1));       // 0

console.log(cal_nd('plus')(2, 1));      // 3
console.log(cal_nd('minus')(2, 1));     // 1

console.log(input);