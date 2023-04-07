//이크마스트립트 문법.
"use strict"
const home =(req,res)=>{
    res.render("./index");
};
const login =(req,res)=>{
    res.render("./login");
};  
// 묘듈로 만들었으면 꼭 exports를 해야 외부에서 사용 가능
module.exports={
    home,
    login,
};