var fs = require('fs');

/*
//readFileSync -> 동기, 한 작업이 끝난 후 다음 작업 수행

console.log('A');
var result = fs.readFileSync(`syntax/sample.txt`, 'utf8');
console.log(result);
console.log('C');
*/
// A
// B
// C

//=======================

//readFile -> 비동기, 한 작업이 끝나기 전에 다음 작업을 수행해 총 수행 시간을 줄임
// NodeJS의 성능을 제대로 끌어올리기 위해서는 반드시 비동기적으로 프로그램 해야함
// 그러나 너무 코드가 복잡하고 내가 하는 일이 성능이 대단한 것이 필요한 게 아니라면 심플한 동기적인 방법을 사용한는 것도 잘못된 것이 아님.
/*
console.log('A');
fs.readFile(`syntax/sample.txt`, 'utf8',function(err, result){
    console.log(result);
});
console.log('C');
// A
// C
// B
*/

//=========================
// callback
fs.readFile(`syntax/sample.txt`, 'utf8',function(err, result){
    console.log(result);
});// nodejs야, 네가 가진 readFile 기능을 이용해서 `syntax/sample.txt`에 있는 파일을 읽어와, 그런데 시간이 조금 걸리니 작업이 끝난 다음에 내가 너한테 전달한 3번째 인자인 함수를 실행시켜
// 작업이 끝난 다음에 처리해야할 일을 함수 안에 두는 것 == callback(나중에 전화해)