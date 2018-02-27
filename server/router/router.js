var express = require("express");
var router  = express.Router();
var Seeing = require("./seeingRouter");

router.post("/login",function (req,res,next) {
    console.log(req,88778)
    if(req.body.password =="123456"){
        req.session.login =1;
        res.send({ret:1,msg:"登录成功",datas:[{userName:"wangyisong",role:"admin"}]})
    }else {
        res.json({ret:3,msg:"登录失败"})
    }

});

module.exports = function(app){
    app.use("/api",router);

};
