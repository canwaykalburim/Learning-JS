let member = ['cat', '7', 'Nero', 'meyaw'];

console.log(member);                        // ['cat', '7', 'Nero', 'meyaw']
console.log(member[2]);                     // Nero

function get_members() {
  return ['cat', '7', 'Nero', 'meyaw'];
}

let members = get_members();
console.log(members);                       // ['cat', '7', 'Nero', 'meyaw']
console.log(members);                       // ['cat', '7', 'Nero', 'meyaw']
console.log(members[0].toUpperCase());      // CAT
console.log(members.length);                // 4

for (let i = 0; i < get_members().length; i++) {
  console.log(members[i].toUpperCase());    // CAT 7 NERO MEYAW
}

let li = ['a', 'b', 'c', 'd', 'e'];
li.push('f');                               // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(li);
li = li.concat(['g', 'h']);
console.log(li);                            // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]
li.unshift('z');
console.log(li);                            // [ 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]
li.splice(1, 8, 'y', 'x', 'w');
console.log(li);                            // [ 'z', 'y', 'x', 'w' ]
li.shift();
console.log(li);                            // [ 'y', 'x', 'w' ]
li.pop();
console.log(li);                            // [ 'y', 'x' ]
li = ['n', 'x', 'z', 'a', 'e'];
li.sort();
console.log(li);                            // [ 'a', 'e', 'n', 'x', 'z' ]
li.reverse();
console.log(li);                            // [ 'z', 'x', 'n', 'e', 'a' ]
