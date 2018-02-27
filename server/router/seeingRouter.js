var express = require("express");
var router  = express.Router();
var Mock = require('mockjs');

router.get("/api/see/list",function (req,res,next) {
    var data = {ret:1,"datas|12":[{"id|+1":[31,554,5646,7,6,9,76767,45454,411,322,433,344,333,36,5,5],
        "device_nbr|1":[4116000000000600,4116000000000610,41160000000620,66655211,55552211],
        "device_name|1":["大庆方向气象设备","大广方向气象设备","北京方向气象设备","上海方向气象设备"],
        "ip|1":["192.168.10.111","125.21.33.1","193.65.15.11","182.65.25.12"],
        "manage|1":["周口交警支队","合肥交警支队","四川交警支队","卡夫卡交警支队"],
        "status|1":[0,1,0]
             }]};
            data =Mock.mock(data);
            if(req.session.login){
                    res.json(data)
                }else {
                    res.json({ret:3,msg:"4141"})
                }
});
module.exports = router;
