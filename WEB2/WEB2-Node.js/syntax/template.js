//Template Literal
var name = 'taehyun';
var letter ='Lorem '+name+'\n\nipsum dolor sit amet, consectetur adipiscing elit. Sed vel turpis eleifend, '+name+' posuere sapien in, volutpat diam. Vivamus laoreet egestas leo eu tincidunt. Suspendisse potenti. Aliquam quis dolor rutrum odio sagittis sodales id in nibh. Pellentesque tincidunt ligula sit '+name+' amet rutrum ornare. Morbi pulvinar justo dui, a lacinia dolor tincidunt non. Curabitur condimentum, leo congue egestas scelerisque, felis dui suscipit neque, hendrerit porta velit metus eget ipsum. Praesent risus lacus, porta non '+name+' vehicula dictum, viverra a tellus. Sed fringilla ligula in lectus fringilla, vel tincidunt augue iaculis. Vivamus et varius justo. Vivamus quis molestie lacus.'

var a = 1;//1은 숫자1 이라는 데이터 타입을 표현하는 Literal
var a = '1';//1은 문자 1이라는 데이터 타입을 표현하는 Literal
// Literal == 정보를 표현하는 방법 ==  정보를 표현하는 기록
// Template으로 만들기: Literal의 처음과 끝을 나타내는 기호 `(숫자 1왼쪽 물결 아래 문자==backtic)를 문자열의 시작과 끝에 붙여주면 됨

var letter =`Lorem ${name}

ipsum dolor sit amet, consectetur adipiscing elit. Sed vel turpis eleifend, ${name} posuere sapien in, volutpat diam. Vivamus laoreet egestas leo eu tincidunt. Suspendisse potenti. Aliquam quis dolor rutrum odio sagittis sodales id in nibh. Pellentesque tincidunt ligula sit ${name} amet rutrum ornare. Morbi pulvinar justo dui, a lacinia dolor tincidunt non. Curabitur condimentum, leo congue egestas scelerisque, felis dui suscipit neque, hendrerit porta velit metus eget ipsum. Praesent risus lacus, porta non ${name} vehicula dictum, viverra a tellus. Sed fringilla ligula in lectus fringilla, vel tincidunt augue iaculis. Vivamus et varius justo. Vivamus quis molestie lacus. ${name}`
console.log(letter);