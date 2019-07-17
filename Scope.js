let vscope = 'global';    // 전역변수
let vscope2 = 'global'

function fscope() {
  let vscope = 'local';   // 지역 변수
  console.log(vscope);
}

function fscope2() {
  let lv = 'local variables';
  gv = 'global variables';
  console.log(vscope);
}

function fscope3() {
  let vscope2 = 'local';
  vscope2 = "local"       // global이지만 위의 선언 때문에 local임
  console.log(vscope2);
}

fscope();     // local
fscope2();    // global
fscope3();    // local

console.log(vscope2);   // global
//console.log(lv);        // error
console.log(gv);        // global variables

let i = 5;

function b() {
  console.log(i);
}

function a() {
  let i = 10;
  b();
}

a();    // 5