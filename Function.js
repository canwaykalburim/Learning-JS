// 함수 미 사용시

for (i = 0; i < 5; i++) {
  for (j = 5; j > i; j--) {
    process.stdout.write('*');
  }
  console.log();
}

for (i = 0; i < 5; i++) {         // 같은 로직이 여러번 나옴
  for (j = 5; j > i; j--) {
    process.stdout.write('*');
  }
  console.log();
}

// 함수 사용시

function star() {                 // 로직은 한 번만 나옴 + 유지 보수 용이
  for (i = 0; i < 5; i++) {
    for (j = 5; j > i; j--) {
      process.stdout.write('*');
    }
    console.log();
  }
}

star();
star();

// 함수 입출력

function word1() {
  return 'dog';
}

function word2() {
  return 'cat';
}

console.log(word1());
console.log(word2());

add = function(a, b) {            // 이렇게 정의도 가능
  return a + b;
}

console.log(add(1, 2));
console.log(add(3, 8));
console.log(add("Hello", ", Friend"));

(function() {                     // 익명 함수
  console.log(8 * 31);
}) ();
