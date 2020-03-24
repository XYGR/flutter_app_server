import express = require("express");
const router:express.Application = express();
const mysql = require('../mysql');
import User from '../model/UserModel';
import userDao from '../dao/userDao'

router.post('/check',(req,res)=> {

    let {tocken:string} = req.body;


    res.send(JSON.stringify({}))

})

// 注册接口
router.post('/register',async(req,res)=>{

    let username:string = req.body.username;
    let password:string = req.body.password;
    console.log(username,password);
    // let result:Array<number> =  await mysql('user_tab').insert({user_name:username,user_pwd:pwd});

    let data = {
        code:"-1",
        message:"faild",
        data:null,
    }

    // if(result[0] ===1){
    //     data.code = "0";
    //     data.message = "success";
    // }

    res.send(JSON.stringify(data))

})

// 登录接口
router.post('/login',async(req,res)=>{

    let username:string = req.body.username;
    let pwd:string = req.body.password;
    console.log(req.body)
    // let result:Array<number> =  await mysql('user_tab').insert({user_name:username,user_pwd:pwd});
    let user = new User()
    user.userName = username;
    user.userPwd = pwd;
    let result:User = await new userDao(user).login();
    console.log('50',result);

    let data = {
        code:"-1",
        message:"faild",
        data:null,
    }

    if(result.userId){
        data.code = "0";
        data.message = "success";
        data.data = result.toString();
    }

    res.send(JSON.stringify(data))

})


module.exports = router;