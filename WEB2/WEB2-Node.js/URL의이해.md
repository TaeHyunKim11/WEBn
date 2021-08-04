# 9 URL의 이해
http://opentutorials.org:3000/main?=id=HTML&page=12

1. http   
: protocol, 프로토콜 통신규칙(hyper text transper protocol), 사용자가 서버에 접속할 때 어떤 방식으로 통신 할 것인가, 웹서버가 서로 데이터를 주고 받기 위해서 만든 통신 규칙, 만약 ftp라는 규칙을 사용한다면 이것은 ftp라고 쓰여있을 것   
2. opentutorials.org   
: host(=domain), host=인터넷에 접속되어있는 각각의 컴퓨터, openturtorials.org는 어떤 특정한 인터넷에 연결되어있는 컴퓨터를 가리키는 주소
3. 3000   
: port number, 한 대의 컴퓨터 안에 여러 대의 서버가 있을 수 있다. 그럼 어떤 서버와 통신할 지 모르는 것을 방지하기 위함.   
    - main.js의 <script>app.listen(3000);</scriprt>는 이것을 지정해 준 것, <script>app.listen(80);</script>이라고 하면 URL에 prot number를 붙이지 않아도 됨. 왜냐하면 웹서버는 80번 포트를 쓴다고 약속되어있기 때문에 http를 통해서 접속했다는 것은 웹서버에 접속했다는 것. 기본값이 80인 것
4. main   
: path, 컴퓨터 안에 어떤 디렉토리에 어떤 파일인지를 가리킴
5. id=HTML&page=12   
: query string, 이 수업의 주인공!, query string값을 변경하면 웹서버에게 정보를 전달(내가 읽고 싶은 정보는 html이고 12page이다라는 식으로)
    - query string의
        - 시작은 ?(물음표)로 하기로 약속되어 있음
        - 값과 값은 &(앰퍼센트)를 쓰기로 약속되어 있음
        - 값의 이름과 값은 =(equal)로 구분하도록 약속되어 있음