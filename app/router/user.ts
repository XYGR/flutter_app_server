import express = require("express");
const router:express.Application = express();

router.post('/check',(req,res)=> {

    let {tocken:string} = req.body;


    res.send(JSON.stringify({}))

})

router.post('/register',async(req,res)=>{

    let username:string = req.body.username;
    let pwd:string = req.body.pwd;

    let result:Array<number> =  await mysql('user_tab').insert({user_name:username,user_pwd:pwd});

    let data = {
        code:"-1",
        message:"faild",
        data:null,
    }

    if(result[0] ===1){
        data.code = "0";
        data.message = "success";
    }

    res.send(JSON.stringify(data))

})


module.exports = router;