let grades = {'John' : 8, 'Max' : 6, 'Bob' : 2};
console.log(grades);          // { john: 8, max: 6, bob: 2 }

let age = {};   // let age = new object(); 이렇게도 사용 가능
age['John'] = 10;
age['Max'] = 24;
age['Bob'] = 6;
console.log(age);             // { john: 10, max: 24, bob: 6 }

console.log(age['Max']);      // 24
console.log(age.Max);         // 24

for (let key in grades) {
  console.log("Key: " + key + ',' + " Value: " + grades[key]);
}

let member = {
  'list' : {'John' : 8, 'Max' : 6, 'Bob' : 2},
  'show' : function() {
    for (let name in this.list){
      console.log(name, this.list[name]);     // 
    }
  }
}

member.show();