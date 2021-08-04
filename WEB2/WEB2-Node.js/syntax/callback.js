/*
function a(){
    console.log('A');
}
a();
*/

var a = function(){
    console.log('A');
}
a();
// 함수의 기능과 내용은 똑같으나 이름이 없는 함수: 익명 함수 
// -> 이름이 없으면 호출 할 수 없기 때문에 변수의 값을 ㄱ함수로 선언해주면 위 함수와 똑같이 a라는 이름을 가짐.
// a뒤에 ()라는 함수를 호출하는 기호를 놓는 걸 통해, a라는 변수가 담고 있는 값인 함수를 실행할 수 있다. => JavaScript에서는 함수가 값이다.

function slowfunc(callback){
    callback();
}
slowfunc(a);
// 굉장히 오래걸리는 기능의 함수라고 하면, 이 기능의 실행이 끝난 다음에 이 기능을 실행한 쪽에게 함수 실행이 끝났으니 다음 일을 하라고 하고 싶다면 인자로 callback을 받으면 됨.
// callback의 기본적인 형식