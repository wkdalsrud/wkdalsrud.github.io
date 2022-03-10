---
title: "M1 mac os 자바 초기 설정하기" 

categories:
  -   JAVA
tags:
  - [JAVA, 초기설정, macbook, m1]

date: 2022-02-28

published : true

---

## 설치해야 할 목록
- JDK
- IDE


## JDK의 종류
- Open JDK
  - 상업적으로 이용할 때 사용
- Oracle JDK
  - 상업적으로 이용하지 않을 때 사용

> Oracle보다는 Open JDK로 사용해 보고 싶어서 Open JDK로 설치해 봤다.


## azul에서 Open JDK 설치하기 ([Zulu JDK](https://www.azul.com/downloads/?os=macos&architecture=arm-64-bit&package=jdk "아래쪽으로 스크롤 하면 다운로드 파일이 보임"))

많이 사용하는 **<span style="color:blue">java 8</span>** 버전을 설치해 준다.  
아무거나 눌러서 설치해도 되지만 나는 ```.dmg```로 설치했다.
![image](https://user-images.githubusercontent.com/73566453/157281566-3f827891-3ccd-45c3-9df6-28f52d4c73ec.png)


## 설치 잘 됐는지 확인하기
터미널에서 다음 명령어를 입력하고 설치한 Open JDK가 잘 설치됐는지 확인한다.
- ```java -version```
- ```javac -version```
![image](https://user-images.githubusercontent.com/73566453/157282869-69b4d52c-a209-4fd2-87bd-5a358a1cb7d2.png)


## 혹시 모르니.. 삭제하는 방법도 가져왔다
공식문서에서 안내하는 방법대로 터미널에서 명령을 실행하면 삭제가 되는 거 같다.
([공식문서 사이트로 이동하기](https://docs.azul.com/core/zulu-openjdk/uninstall/macos))
<br>

![image](https://user-images.githubusercontent.com/73566453/157283347-7af6c5aa-53e5-4fd0-ad7f-6ced9ee3a405.png)