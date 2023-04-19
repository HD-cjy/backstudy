//이크마스트립트 문법.
"use strict"
// const home =(req,res)=>{
//     res.render("./index");
// };
// const login =(req,res)=>{
//     res.render("./login");
// };  //home 과 login은 단순히 페이지를 렌더링 해주는 기능 ==> 이것을 output으로 이용하기 위해 다시 작업해줌
const output = {
 home : (req,res)=>{
    res.render("./index");
},
 login : (req,res)=>{
    res.render("./login");
},
} 

const users = {
    id : ["11 11","sumin","jinyoung"],
    pw: ["1111","babo","jinjin"],
};

// 묘듈로 만들었으면 꼭 exports를 해야 외부에서 사용 가능
const process = {
    login : (req,res)=>{
       const id = req.body.id,
        pw = req.body.pw;

        if (users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.pw[idx]===pw){
                return res.json({
                    success:true,
                    msg: "성공 씨발"
                });
            }
        }
        return res.json({
            success : false,
            msg : "로그인에 실패하였습니다.",
        });
        
    },
};

module.exports={
  output,process
};