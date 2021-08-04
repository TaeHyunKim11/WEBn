// array, object

var f = function(){
    console.log(1+1);
    console.log(1+2);
}
console.log(f);
f();
//JavaScript에서 함수는
//처리해야할 일에 대한 구문(Statement)이면서 동시에 값이다.
//쉽게 생각하면 함수를 변수에 넣을 수 있다면 값이고, 아니라면 값이 아니라고 생각해보자

//var i = if(true){console.log(1)};
//var w= while(true){console.log(1)}
//위 조건문, 반복문이라는 구문이 값이 아니기 때문에 오류가 뜸

//JavaScript에서는 처리 방법을 그룹핑하는 함수도 데이터이기 때문에 서로 연관된 데이터를 담는 그릇인 배열과 객체에 담을 수 있다.
//함수는 배열의 원소로서 존재 가능
var a = [f];
a[0]();
//함수는 객체의 원소(property)로서 존재 가능
var o ={
    func:f
}
o.func();

//값으로서 함수를 사용하는 경우는 많지 않음(쓸모가 크게 없음), 그러나 객체에 많이 담는다.(담아둔 함수를 이름으로 꺼내기 좋기 때문에)