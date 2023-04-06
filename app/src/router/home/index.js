"use strict";
//이것이 라우팅.. 
//app.이란 객체는 index.js에 없기에 위에 선언 해줘야함.
const express=require("express");
const router=express.Router();

const ctrl = require("./home.ctrl");
router.get("/",ctrl.home);
router.get("/login",ctrl.login);

//외부에서 라우터를 사용 할 수 있도록 던지기.//라우터는 연결 해 주는 부분이다(req,res)=>{ res.render("home/login");. <<이 부분이 컨트롤러
module.exports = router;