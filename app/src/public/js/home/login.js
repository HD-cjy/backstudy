"use strict";    //폼에 작성된 ID,PW값이 로그인 버튼을 누를 때, 서버로 전송  값을 자바 스크립트에서 제어 할 수 있게 해야함.
                // DOM이 html에 입력 된 값을 제어 할 수 있게 해줌 :: DOM이란? :Doucument Object Model. (인터페이스)
                //const id = document.querySelector("선택자")  에서 선택자란 HTML태그의 id를 의미
const id = document.querySelector("#id"),                           //#을 쓰는 이유는 HTML태그명과 겹치게 되면 안됨, 그러므로 #을 써서 그 태그명을 가진 요소 가져옴
    password = document.querySelector("#pw"),
    login_Btn = document.querySelector("button");

    login_Btn.addEventListener("click",login);
    

    function login( ) {
        console.log("hello User");
    }
    console.log(id);
    console.log(pw);
    console.log("hello");
    