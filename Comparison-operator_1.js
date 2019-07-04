// 동등 연산자
console.log(1 == 2);              //false
console.log(2 == 2);              //true
console.log("one" == "one");      //true
console.log("one" == "two");      //false

//일치 연산자
console.log(1 == "1");            //true
console.log(1 === "1");           //false

console.log(null == undefined);   //true
console.log(null === undefined);  //false

console.log(true == 1);           //true
console.log(true == '1');         //true
console.log(true === 1);          //false
console.log(true === '1');        //false

console.log(0 === -0);            //true
console.log(NaN === NaN);         //false