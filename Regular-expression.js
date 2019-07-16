let pattern = /a/;                    // 정규식 리터럴
let pattern2 = new RegExp('b');       // 정규표현식 객체 생성자
let pattern3 = /c./;                  // . 사용 (c 뒤에 어떠한 문자도 상관 없음)
let pattern4 = /(\w+)\s(\w+)/         // 문자 한 개 이상 + 공백 + 문자 한 개 이상
let xi = /w/;                         // i 미사용
let oi = /w/i;                        // i 사용 (대소문자 미구분)
let xg = /o/;                         // g 미사용
let og = /o/g;                        // g 사용 (모든 검색 결과 리턴)
let ig = /c/ig;                       // i, g 동시 사용

let str = "My name is Cocoa"
let str2 = "We're friends"

let result = str.replace(pattern4, "$2", "$1");   // 두 번째 그룹($2) 먼저

console.log(pattern.exec(str));                   // [ 'a', index: 4, input: 'My name is Cocoa', groups: undefined ]
console.log(pattern2.exec(str));                  // null

console.log(pattern.test(str));                   // true
console.log(pattern.test(str2));                  // false

console.log(str.match(pattern));                  // [ 'a', index: 4, input: 'My name is Cocoa', groups: undefined ]
console.log(str.match(pattern2));                 // null

console.log(str.replace(pattern3, "rali"))        // My name is Coralia

console.log(str2.match(xi));                      // null
console.log(str2.match(oi));                      // [ 'W', index: 0, input: "We're friends", groups: undefined ]

console.log(str.match(xg));                      // [ 'o', index: 12, input: 'My name is Cocoa', groups: undefined ]
console.log(str.match(og));                      // [ 'o', 'o' ]

console.log(str.match(ig));                      // [ 'c', 'c' ]

console.log(result);                             // name is Cocoa