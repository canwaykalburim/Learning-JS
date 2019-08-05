let number = [10 , 20, 9, 6, 7, 3, 2, 5, 4, 1];

// 콜백(callback)
let sortFunc = function(a, b) {
  return a - b;
}

console.log(number.sort())                // [ 1, 10, 2, 20, 3, 4, 5, 6, 7, 9 ]
console.log(number.sort(sortFunc));       // [ 1, 2, 3, 4, 5, 6, 7, 9, 10, 20 ]