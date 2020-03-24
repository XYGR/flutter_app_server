import express = require("express");
const mysql = require('../mysql');
const router:express.Application = express();

router.get('/api',async(req,res) =>{


    let data:any = {
        code:0,
        message:"success",
        data:[]
    }
    let result:Array<Object> = await mysql.table('user_tab').where({user_name:'admin'}).select();
    data.data = JSON.parse(JSON.stringify(result))


    res.send(JSON.stringify(data))
})


module.exports = router