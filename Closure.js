function outter() {
  let title = 'learning javascript';
  return function() {
    console.log(title);
  }
}

function factory_movie(title) {
  return {
    get_title : function() {
      return title;
    },
    set_title : function(_title) {
      if(typeof _title === 'string') {
        title = _title
      } else {
        console.log('Title must be a string');
      }
    }
  }
}

inner = outter();
inner();              // outter 함수가 종료되었지만 외부 함수에 성공적으로 접근됨

ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix')

console.log(ghost.get_title());     // Ghost in the shell
console.log(matrix.get_title());    // Matrix

ghost.set_title('공각기동대');

console.log(ghost.get_title());     // 공각기동대
console.log(matrix.get_title());    // Matrix