var store = [{
        "title": "Git 명령어",
        "excerpt":"설치와 설정 git config 이 명령으로 사용자 이름이나 터미널 색, 편집기 등을 설정한다. 저장소마다 다르게 혹은 글로벌하게 설정할 수 있는데 각각 설정파일이 다르다. git config –global user.name “본인 이름 입력” 사용자 이름 설정 git config –global user.email “본인 이메일 입력” 사용자 이메일 설정 git config user.name 사용자 이름 확인 git...","categories": ["Git & Github"],
        "tags": ["Git","Git 명령어","Pro Git"],
        "url": "http://localhost:4000/git%20&%20github/git/",
        "teaser": null
      },{
        "title": "Markdown 문법 정리",
        "excerpt":"제목 (h1~h6) # h1 ## h2 ### h3 #### h4 ##### h5 ###### h6 h1 h2는 구분선이 생긴다 h3 h4 h5 h6 순서 있는 리스트 첫번째 두번째 세번째 첫번째 두번째 세번째 1. 첫번째 1. 두번째 1. 세번째 1. 첫번째 2. 두번째 3. 세번째 숫자에 상관없이 이어지는 거 같다. 순서 없는...","categories": ["Markdown"],
        "tags": ["마크다운"],
        "url": "http://localhost:4000/markdown/markdown/",
        "teaser": null
      },{
        "title": "[Pro Git] 1장",
        "excerpt":"버전 관리 시스템 (VSC : Version Control System) 파일 변화를 시간에 따라 기록했다가 나중에 특정 시점의 버전을 다시 꺼내올 수 있는 시스템 장점 각 파일을 이전 상태로 되돌릴 수 있다. 프로젝트를 통째로 이전 상태로 되돌릴 수 있다. 시간에 따라 수정 내용을 비교해 볼 수 있다. 누가 문제를 일으켰는지 추적할 수...","categories": ["Git & Github"],
        "tags": ["Git","Pro Git"],
        "url": "http://localhost:4000/git%20&%20github/progit1/",
        "teaser": null
      },{
        "title": "[Pro Git] 2장",
        "excerpt":"Git 저장소 만들기 기존 프로젝트나 디렉터리를 Git 저장소로 만드는 방법 다른 서버에 있는 저장소를 Clone 하는 방법 기존 디렉터리를 Git 저장소로 만들기 기존 프로젝트를 Git으로 관리하고 싶을 때 프로젝트의 디렉터리로 이동해서 git init 명령을 실행한다. 이 명령은 .git 이라는 하위 디렉터리를 만든다. .git 디렉터리에는 저장소에 필요한 뼈대 파일이 들어 있고,...","categories": ["Git & Github"],
        "tags": ["Git","Pro Git"],
        "url": "http://localhost:4000/git%20&%20github/progit2/",
        "teaser": null
      },{
        "title": "M1 mac os 자바 초기 설정하기",
        "excerpt":"설치해야 할 목록 JDK IDE JDK의 종류 Open JDK 상업적으로 이용할 때 사용 Oracle JDK 상업적으로 이용하지 않을 때 사용 Oracle보다는 Open JDK로 사용해 보고 싶어서 Open JDK로 설치해 봤다. azul에서 Open JDK 설치하기 (Zulu JDK) 많이 사용하는 java 8 버전을 설치해 준다. 아무거나 눌러서 설치해도 되지만 나는 .dmg로 설치했다....","categories": ["JAVA"],
        "tags": ["초기설정","macos","m1"],
        "url": "http://localhost:4000/java/1javasetting/",
        "teaser": null
      },{
        "title": "JAVA 기초",
        "excerpt":"JAVA란? JAVA는 자바 컴파일러가 제공하는 언어이다. C언어나 C++언어같은 다른 언어들의 컴파일러는 기계어로 번역할 때 프로그램이 실행될 대상 컴퓨터의 운영체제에 종속적인 코드로 변환을 한다. 이 코드로 다른 운영체제나 하드웨어에서 실행을 하려면 코드를 재작성하거나 컴파일러를 다시 실행시켜야 한다는 단점이 있다. 자바로 작성된 프로그램은 운영체제의 종류에 관계없이 실행이 가능하기 때문에 운영체제에 따라 프로그램을...","categories": ["JAVA"],
        "tags": ["JAVA"],
        "url": "http://localhost:4000/java/javabase/",
        "teaser": null
      },{
        "title": "javac와 java의 차이",
        "excerpt":"javac  .java 파일을 .class 파일로 변환시켜 주는 컴파일러를 의미한다.  그래서 hello.java 파일이 있다는 가정하에 터미널에 javac hello.java 명령어를 입력하면 hello.java 라는 파일이 생성된다.   java  javac로 컴파일된 .class 파일을 실행하는 명령어다.  java hello.java 명령어를 입력하면 hello.java 파일 안에 내용이 실행된다.  ","categories": ["JAVA"],
        "tags": ["java","javac"],
        "url": "http://localhost:4000/java/1javac/",
        "teaser": null
      },{
        "title": "API란?",
        "excerpt":"Application Programming Interface      응용 프로그램에서 사용할 수 있도록 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스    내용 추가해야게뜸,,   ","categories": ["JAVA"],
        "tags": ["API"],
        "url": "http://localhost:4000/java/api/",
        "teaser": null
      },{
        "title": "자료형",
        "excerpt":"기본형 : 실제 값을 저장     byte   short   char   int   long   float   double   boolean   참조형 : 객체의 주소를 저장     array   interface   class  ","categories": ["JAVA"],
        "tags": ["자료형"],
        "url": "http://localhost:4000/java/datatype/",
        "teaser": null
      },{
        "title": "포맷 문자열과 진법",
        "excerpt":"포맷 문자열과 형식 지정자 코드 데이터 형식 d 정수 (10진수) x 정수 (16진수) o 정수 (8진수) f 실수 c 문자 s 문자열 값의 종류와 표현방법 진법 표현 예 설명 2진법 0b32 숫자 앞에 0과 b를 사용 8진법 032 숫자 앞에 0을 사용 10진법 32 숫자 앞에 아무것도 사용하지 않음 16진법...","categories": ["JAVA"],
        "tags": ["포맷문자열","진법"],
        "url": "http://localhost:4000/java/1format/",
        "teaser": null
      },{
        "title": "연산자",
        "excerpt":"연산자 기호 연산자 = 대입 연산자 + 덧셈 연산자 - 뺄셈 연산자 * 곱셈 연산자 / 나눗셈 연산자 % 나머지 연산자 == 같다 != 같지 않다 &amp;&amp; 교집합 연산자 || 합집합 연산자 ++ 증가 연산자 – 감소 연산자 &amp; 비트 교집합 연산자 | 비트 합집합 연산자 ^ 비트 차집합 연산자...","categories": ["JAVA"],
        "tags": ["연산자"],
        "url": "http://localhost:4000/java/2operator/",
        "teaser": null
      },{
        "title": "String",
        "excerpt":"✔️ 문자열 비교 == 객체의 주소를 비교한다. equals() 객체의 내용을 비교한다. String str1 = new String(\"JAVA\"); String str2 = new String(\"JAVA\"); String str3 = \"JAVA\"; String str4 = \"JAVA\"; 이렇게 4개의 문자열이 있다고 했을 때 str1 == str2 str1과 str2의 객체 주소를 비교하게 된다. str1과 str2는 서로 다른 객체이므로 결과는...","categories": ["JAVA"],
        "tags": ["string"],
        "url": "http://localhost:4000/java/3string/",
        "teaser": null
      },{
        "title": "Java프로그래밍 [1]",
        "excerpt":"자바 언어의 역사 Sun Microsystems의 제임스 고슬링 1990년 그린 프로젝트(소형 전자제품에 들어가는 소프트웨어)와 Oak 언어에서 시작이 됐다. C++를 확장해서 사용하려 했지만 부족하다고 생각해서 C++를 토대로 새로운 언어를 개발함 1995년 Java와 HotJava(자바 언어로 구현한 웹 브라우저) 발표함 1996년 1월 공식적으로 JDK1.0을 발표했다. Java 언어의 특징 C와 C++ 언어에서 발전된 언어 플랫폼에...","categories": ["JAVA"],
        "tags": ["Java프로그래밍"],
        "url": "http://localhost:4000/java/uni_java1/",
        "teaser": null
      }]
