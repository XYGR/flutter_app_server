import express = require("express");
const router:express.Application = express();
import User from '../entity/UserEntity';
import userDao from '../dao/userDao'

router.get('/boot',async(req,res)=> {

    let {sessionID} = req.query;
    console.log(sessionID);
    let data = {
        error:true,
        message:"faild",
        data:null,
    }

    let result:User = await new userDao(new User()).check(sessionID);
    if(result.userId){
        data.error = false;
        data.message = "success";
        data.data = result.toString();
    }else{
        data.message = "the sessionID is invalid";
    }
    
    res.send(JSON.stringify(data))

})

// 注册接口
router.post('/register',async(req,res)=>{

    let username:string = req.body.username;
    let password:string = req.body.password;
   
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
router.post('/login',async(req:any,res)=>{

    let username:string = req.body.username;
    let pwd:string = req.body.password;
    
    let user = new User();
    user.userName = username;
    user.userPwd = pwd;
    let result:User = await new userDao(user).login();

    let data = {
        error:true,
        message:"faild",
        data:null,
    }

    if(result.userId){
        data.error = false;
        data.message = "success";
        data.data = req.sessionID;
        req.session.userInfo = JSON.stringify(result.toString());
        console.log("sessionID",req.sessionID)
    }else{
        data.error = true;
        data.message = "用户名或密码错误";
    }
    
    res.send(JSON.stringify(data))

})

// 注销接口
router.get('/logout',async(req:any,res)=>{

    let {sessionID} = req.query;
    console.log(sessionID);
    
    let data = {
        error:true,
        message:"faild",
        data:null,
    }
    let result:boolean = await new userDao(new User()).logout(sessionID);
    if(result){
        data.error = false;
        data.message = "success";
    }else{
        data.message = "error logging out";
    }
    
    res.send(JSON.stringify(data))

})


module.exports = router;