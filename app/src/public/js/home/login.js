"use strict";    //폼에 작성된 ID,PW값이 로그인 버튼을 누를 때, 서버로 전송  값을 자바 스크립트에서 제어 할 수 있게 해야함.
                // DOM이 html에 입력 된 값을 제어 할 수 있게 해줌 :: DOM이란? :Doucument Object Model. (인터페이스)
                //const id = document.querySelector("선택자")  에서 선택자란 HTML태그의 id를 의미
const id = document.querySelector("#id"),                           //#을 쓰는 이유는 HTML태그명과 겹치게 되면 안됨, 그러므로 #을 써서 그 태그명을 가진 요소 가져옴
    password = document.querySelector("#pw"),
    login_Btn = document.querySelector("button");

    login_Btn.addEventListener("click",login);
    

    function login( ) {
     const req = {
        id : id.value,
        pw : password.value,
     };
     // fetch 라는 것으로 전달 해주는 것 . 
     // 1. 어떤 경로에서 주고 받을지 벡엔드 개발자가 만듦.  //데이터를 전달하는 과정 먼저 할 것. //피치를 통해 데이터를 받으려면 login이라는 경로와 post라는 메소드를 사용하여
     //받아 올 수 있는 api가 필요합니다.
     fetch("/login",{
         method:"POST",
         headers:{
            "Content-Type" : "application/json"
         },
         body:JSON.stringify(req),
     });



    }
    
    
    