// 변수가 없을 떄

console.log(100 + 10);
console.log((100 + 10) / 10);
// 100 -> 1000, 10 -> 100
console.log(1000 + 100);
console.log((1000 + 100) / 100);

// 변수가 있을 때

a = 100, b = 10 ;
console.log(a + b);
console.log((a + b) / b);
// 100 -> 1000, 10 -> 100
a = 1000, b = 100;  // 값만 변경하면 됨
console.log(a + b);
console.log((a + b) / b);