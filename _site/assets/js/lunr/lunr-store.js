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
        "tags": ["JAVA"],
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
        "excerpt":"연산자 기호 연산자 = 대입 연산자 + 덧셈 연산자 - 뺄셈 연산자 * 곱셈 연산자 / 나눗셈 연산자 % 나머지 연산자 ! 부정 연산자 == 같다 != 같지 않다 &amp;&amp; 교집합 연산자 || 합집합 연산자 ++ 증가 연산자 – 감소 연산자 &amp; 비트 교집합 연산자 | 비트 합집합 연산자 ^...","categories": ["JAVA"],
        "tags": ["연산자"],
        "url": "http://localhost:4000/java/2operator/",
        "teaser": null
      },{
        "title": "String",
        "excerpt":"✔️ 문자열 비교 == 객체의 주소를 비교한다. equals() 객체의 내용을 비교한다. String str1 = new String(\"JAVA\"); // 생성자 사용 String str2 = new String(\"JAVA\"); String str3 = \"JAVA\"; String str4 = \"JAVA\"; 이렇게 4개의 문자열이 있다고 했을 때 str1 == str2 str1과 str2의 객체 주소를 비교하게 된다. str1과 str2는 서로...","categories": ["JAVA"],
        "tags": ["string"],
        "url": "http://localhost:4000/java/3string/",
        "teaser": null
      },{
        "title": "Java프로그래밍 [1]",
        "excerpt":"자바 언어의 역사 Sun Microsystems의 제임스 고슬링 1990년 그린 프로젝트(소형 전자제품에 들어가는 소프트웨어)와 Oak 언어에서 시작 1995년 Java와 HotJava(자바 언어로 구현한 웹 브라우저) 발표함 1996년 1월 공식적으로 JDK1.0을 발표 Java 언어의 특징 C와 C++ 언어에서 발전된 언어 플랫폼에 독립적 객체지향언어 웹이나 네트워크 프로그래밍에 용이하다. 예외 처리 기능을 제공한다. 멀티 스레딩을...","categories": ["JAVA"],
        "tags": ["Java프로그래밍"],
        "url": "http://localhost:4000/java/uni_java1/",
        "teaser": null
      },{
        "title": "IntelliJ에서 Java 프로젝트 만들기",
        "excerpt":"새 프로젝트 생성 기존에 생성되어 있는 프로젝트를 불러오려면 Open 선택 후 파일 선택! JAVA 선택 → JDK 버전 확인! Next 선택 경로 선택! 폴더를 새로 만들 거면 폴더를 새로 만들고 새로 만든 폴더를 지정해 주면 된다. 경로선택 후 Finish 선택 완성! 패키지 만들기 src → New → Package 클래스 만들기...","categories": ["ETC"],
        "tags": ["IntelliJ"],
        "url": "http://localhost:4000/etc/intelliJ/",
        "teaser": null
      },{
        "title": "Java프로그래밍 [2]",
        "excerpt":"식별자 클래스 낙타표기법 메소드, 변수(필드) 첫 글자가 소문자 상수 모든 문자를 대문자로 표기하고 단어 사이에 ‘_‘를 넣어서 구분한다. 변수의 종류 인스턴스 변수 객체가 소유하는 변수 클래스 정의에서 static이 아닌 필드 클래스 변수 객체가 공유하는 변수 클래스 정의에서 static 필드 지역변수 메서드 내부 또는 지역 블럭 내부에서 선언된 변수 변수의 사용...","categories": ["JAVA"],
        "tags": ["Java프로그래밍"],
        "url": "http://localhost:4000/java/uni_java2/",
        "teaser": null
      },{
        "title": "Java프로그래밍 [3]",
        "excerpt":"배열 (Array) 같은 타입의 데이터들이 순차적으로 저장된다. 배열의 크기는 배열이 초기화 또는 생성할 때 정해지고 한번 생성하면 길이를 변경할 수 없기 때문에 이미 생성된 배열의 길이는 변하지 않는다. 왜? : 배열은 연속적인 자료이다. 배열의 길이에 맞춰서(byte) 메모리의 공간을 찾아서 만드는데 배열의 길이를 변경하게 되면 그 공간에 변경된 배열의 길이만큼의 메모리...","categories": ["JAVA"],
        "tags": ["Java프로그래밍"],
        "url": "http://localhost:4000/java/uni_java3/",
        "teaser": null
      },{
        "title": "Java프로그래밍 [4]",
        "excerpt":"생성자 (Constructor) 객체가 생성될 때 자동으로 실행되는 메서드 객체의 필드 값을 초기화하거나 메모리 할당 등의 작업이다. Circle c = new Circle(5); new 연산자를 이용하여 Circle 객체를 생성하고 생성자가 호출되면서 (데이터 필드 초기화) 객체의 참조값을 변수에 대입 정의 방법 생성자 이름은 클래스 이름과 같다. 생성자 오버로딩 여러 생성자를 정의할 수 있다....","categories": ["JAVA"],
        "tags": ["Java프로그래밍"],
        "url": "http://localhost:4000/java/uni_java4/",
        "teaser": null
      },{
        "title": "Java프로그래밍 [5]",
        "excerpt":"추상메서드 abstract 사용 몸체 구현 X 자식 클래스에 상속될 때, 몸체의 구현이 필요하다 final과 함께 사용 불가 추상클래스 객체 생성 불가 추상메서드를 가지고 있는 클래스는 추상클래스여야 함 자식 클래스로 상속이 되어야 자식 클래스에서 객체를 생성할 수 있다. 추상메서드 + 일반메서드가 같이 있음 인터페이스란? 객체를 분리하고 결합하기 위해 만든 약속이다. 추상메소드의...","categories": ["JAVA"],
        "tags": ["Java프로그래밍"],
        "url": "http://localhost:4000/java/uni_java5/",
        "teaser": null
      },{
        "title": "HTML이란",
        "excerpt":"HTML이란? HyperText Markup Language 웹(World Wide Web)에서 사용하는 마크업 언어 하이퍼텍스트 다른 텍스트에 참조(링크)를 가진 텍스트 마크업 mark + up 합성어 문서의 구성 및 마크업의 분류 내용 구조 스타일 문서의 실제 본문 내용 문서의 구성 정보 문서의 표현 의미적 마크업 구조적 마크업 양식적 마크업 &lt;title&gt; &lt;address&gt; 등 &lt;p&gt; &lt;div&gt; 등...","categories": ["HTML"],
        "tags": ["Frontend","HTML"],
        "url": "http://localhost:4000/html/uni_html/",
        "teaser": null
      }]
