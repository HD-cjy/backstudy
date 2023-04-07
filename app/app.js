"use strict";
//모듈
const express = require("express");
const app = express();

//라우팅.
const home= require("./src/routes/home"); // 상대 경로로 자바 스크립트를 불러올 위치를 지정해줌으로써 js 파일을 읽어 들이고. 아래 app.use 에 있는 home으로 이동 가능
                                      // 결과적으로 index.js 파일로 이동후 app.get("/",(req,res)=>{ res.render("home/index"); }); 의 콜백함수 실행 되게 됩니다.

// CommonJS Modules





//app 세팅 

// app.set('views','./views');
// app.set('view engine','ejs');


// app.get('/',(req,res)=> {
//     res.render('/home/index');
// });

// app.get('/login',(req,res)=> {
//     res.render('/home/login');
// });



//세팅


app.set("views","./src/views/home")
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/src/public`));//__dirname 은 app.js(이 파일)이 있는 위치 >안에있는 src/public 폴더를 정적 경로로 지정

app.use("/",home);                 //use ->미들 웨어를 등록해주는 메서드.

// app.listen(PORT,function(){
//     console.log('서버가동'); 
// });  ===> www.js파일로 넘어감 고로 export 해줘야함

module.exports = app; 